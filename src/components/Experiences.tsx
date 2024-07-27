import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Circle } from '@mui/icons-material';
import PaperLayout from './PaperLayout';

const EXPERIENCES = [
  {
    panelId: "panel1",
    position: "Application Engineer - Amazon",
    tenure: "2023 -> Present",
    points: [
      "Created self-service scheduling feature with AWS eventBridge.",
      " UI/UX improvements in React.",
      "Got second prize in RBS Hackathon for automatic GK issue fix idea.",
      "Write integration tests in Typescript.",
      "Create alarms and monitoring dashboards in aws cloudwatch."
    ],
    chips: [
      "AWS",  "Typescript", "Java", "React", "Event Driven Architecture"
    ]
  },

  {
    panelId: "panel2",
    position: "Software Engineer - Oracle",
    tenure: "2019 -> 2023",
    chips: [
      "Oracle Cloud", "C++", "Java", "PHP", "Kubernetes", "Helm", "Oracle JET", "SOAP"
    ],
    points: [
      "Decreased the running time of our C++ api from 1 minute to 2 seconds.",
      "Reduced the memory of our C++ service by 15GB which was blocking release of our service.",
      "Migrated code from a C++ monolith into 2 CICD spring-boot microservices.",
      "Fixed memory leak of our C++ microservice that depended on a third party json parsing library",
      "Implemented liveness probe for our service to restart zombie services.",
      "Wrote integration test in K8s with init containers",
      "Fix accessiblity issues and develop UI features for our settings page",
    ]
  },
  {
    panelId: "panel3",
    position: "Devops Engineer - Flytxt",
    tenure: "2018 -> 2019",
    chips: [
      "GCP", "Apache Marathon", "Apache Mesos", "Python", "Bash", "Angular"
    ],
    points: [
      "Maintained an internal monitoring tool written in Angular 6 and Flask/Pandas/grpc as backend.",
      "Created a backup and restore mechanism for Hbase",
      "Fix infrastructure vulnerabilites in the hadoop and hbase cluster regarding authentication"
    ]
  },
]
export default function Experiences() {

  const [expanded, setExpanded] = React.useState<boolean[]>(EXPERIENCES.map(_=> true));

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(expanded.map((item, arrayIndex) => {
        if(index === arrayIndex) {
          return isExpanded;
        }
        return item;
      }))
    };

  return (
    <PaperLayout heading="Experiences">
          {
            EXPERIENCES.map((experience, index) =>
              <Accordion 
              expanded={expanded[index]} 
              onChange={handleChange(index)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={experience.panelId + "bh-content"}
                  id={experience.panelId + "bh-header"}
                >
                  <Typography sx={{ flexGrow: 1 }}>
                    {experience.position}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    {experience.tenure}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={1} direction="row">
                  {
                    experience.chips.map(chip => 
                      <Chip label={chip} variant="outlined" />
                    )
                  }
                  </Stack>
                  <List sx={{display: "decimal"}}>
                    {
                      experience.points.map(point =>
                        <ListItem disablePadding sx={{display: "list-item"}}> 
                          {/* <ListItemIcon>
                            <Circle/>
                          </ListItemIcon> */}
                          <ListItemText primary={point} />
                        </ListItem>
                      )
                    }
                  </List>
                </AccordionDetails>
              </Accordion>
            )
          }
    </PaperLayout>
  )
}
