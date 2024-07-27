import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from 'react'

export default function PaperLayout({ children, heading }:
    { children?: React.ReactNode, heading: string }
) {
    return (
        <Paper elevation={3}>
            <Box padding={1}>
                <Box paddingBottom={1}><Typography variant='h5'>{heading}</Typography></Box>
                {children}
            </Box>
        </Paper>
    )
}
