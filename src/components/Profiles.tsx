import React from 'react'
import Flair from './Flair'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import PaperLayout from './PaperLayout'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Profiles() {
    const HEIGHT = "50px";
    const PROFILES = [
        ["Stackoverflow", <Flair />],
        ["Github", <a href="https://github.com/albinpaul"><GitHubIcon fontSize='large' /></a>],
        ["CodePen", <a href="https://codepen.io/blisshunter"><img height={HEIGHT} src="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico" /></a>],
        ["Hackerrank", <a href="https://www.hackerrank.com/profile/albinpaul_ks"><img height={HEIGHT} src="https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png" /></a>],
        ["Leetcode", <a href="https://leetcode.com/u/albin_paul/"><img height={HEIGHT} src="https://assets.leetcode.com/static_assets/public/icons/favicon.ico" /></a>],
        ["Linkedin", <a href="https://www.linkedin.com/in/albin-paul-ks/"><LinkedInIcon fontSize='large' /></a>]
    ]
    return (
        <PaperLayout heading='Profiles'>
            <Stack direction="row" spacing={2}>
                {
                    PROFILES.map(profile =>
                        <Card sx={{ maxWidth: 275 }}>
                            <CardContent>
                                <Typography variant='h6'> {profile[0]}</Typography>
                                {profile[1]}
                            </CardContent>
                        </Card>
                    )
                }
            </Stack>
        </PaperLayout>
    )
}
