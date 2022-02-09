import React from 'react';
import { Container, Typography } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const FactsManagement = () => {
    const columns = [
        {
            field: "fact",
            headerName: "Fact",
            flex: 4,
        },
        {
            field: "published",
            headerName: "Published",
            flex: 1,
            renderCell: ({ value }) => {
                return (
                    value ? <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> : <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} />
                );
            }

        },
    ];

    const rows = [
        { id: 1, fact: 'Approaches to covers have changed dramatically over the years at Vogue, from Edward Steichen’s first photographic color cover in 1932, to Salvador Dali\'s signature surrealist, dystopian landscape. The title delights in offering an element of surprise.', published: true },
        { id: 2, fact: 'The first person convicted of speeding was going eight mph.', published: false },
        { id: 3, fact: 'India has one of the largest postal networks on the planet; including a floating post office.', published: true },
        { id: 4, fact: 'The world wastes about 1 billion metric tons of food each year.', published: false },
    ]

    return (
        <Container sx={{ mt: 8 }} maxWidth="md">
            <Typography
                component="h2"
                variant="h5"
                align="center"
                color="text.primary"
                mb={3}
            >
                Manage Facts
            </Typography>


            <DataGrid
                autoHeight
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
        </Container>
    );
};

export default FactsManagement;