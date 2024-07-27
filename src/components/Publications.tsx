import React from 'react'
import PaperLayout from './PaperLayout'
import { Chip } from '@mui/material'

export default function Publications() {
    return (
        <PaperLayout heading='Publications'>
            <Chip
                label={"A Study on Different Music Genre Classification Methods"}
                component="a"
                href={"https://www.ijcsma.com/articles/a-study-on-different-music-genre-classification-methods.pdf"}
                variant="outlined"
                clickable
            />
        </PaperLayout>
    )
}
