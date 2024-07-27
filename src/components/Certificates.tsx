import React from 'react'
import PaperLayout from './PaperLayout'
import Chip from '@mui/material/Chip'
import { Certificate } from 'crypto'
import Stack from '@mui/material/Stack'

export default function Certificates() {
    const CERTIFICATES = [
        ["Cloud guru - AWS cloud practitioner Certificate", "https://verify.acloud.guru/AF3BE75BF14D"],
        ["Architecting the compute engine - GCP", "https://www.coursera.org/account/accomplishments/specialization/certificate/YMLRMLP4V3RK"],
        ["Spring boot 6: Begineer to Guru", "https://www.udemy.com/certificate/UC-d9ff09dd-1dd7-4c3d-b5a4-0dd37a980f25/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"],
        ["React - The Complete Guide", "https://www.udemy.com/certificate/UC-6a050555-be14-4862-925d-9fe488b4f1b9/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"]
    ]
    return (
        <PaperLayout heading='Certificates'>
            <Stack direction="row" spacing={1}>

            {
                CERTIFICATES.map(certificate =>
                    <Chip
                        label={certificate[0]}
                        component="a"
                        href={certificate[1]}
                        variant="outlined"
                        clickable
                    />
                )
            }
            </Stack>
        </PaperLayout>
    )
}
