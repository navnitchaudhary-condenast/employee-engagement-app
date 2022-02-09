import React, { useState } from 'react';
import { Container, Typography, Dialog, DialogContent, DialogActions, DialogTitle, Button, TextField, Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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

    const [rows, setRows] = useState([
        { id: 1, fact: 'Approaches to covers have changed dramatically over the years at Vogue, from Edward Steichen’s first photographic color cover in 1932, to Salvador Dali\'s signature surrealist, dystopian landscape. The title delights in offering an element of surprise.', published: true },
        { id: 2, fact: 'The first person convicted of speeding was going eight mph.', published: false },
        { id: 3, fact: 'India has one of the largest postal networks on the planet; including a floating post office.', published: true },
        { id: 4, fact: 'The world wastes about 1 billion metric tons of food each year.', published: false },
    ]);
    const [displayAddFactDialog, setDisplayAddFactDialog] = useState(false);
    const [newFact, setNewFact] = useState('');

    function handleAddFact() {
        setRows([...rows, { id: rows.length + 1, fact: newFact, published: false }]);
        setNewFact('');
        setDisplayAddFactDialog(false);
    }

    return (
        <>
            <Container sx={{ mt: 8, mb: 3 }} maxWidth="md">
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                    <Typography
                        component="h2"
                        variant="h5"
                        align="center"
                        color="text.primary"
                    >
                        Manage Facts
                    </Typography>

                    <FontAwesomeIcon icon={faPlusCircle} style={{cursor: 'pointer'}} onClick={() => setDisplayAddFactDialog(true)}/>
                </Box>

                <DataGrid
                    autoHeight
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Container>

            <Dialog onClose={() => {
                setDisplayAddFactDialog(false);
            }} open={displayAddFactDialog}
                fullWidth
                maxWidth="sm">
                <DialogTitle>Add a new fact</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fact"
                        label="Fact"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newFact}
                        onChange={(e) => setNewFact(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDisplayAddFactDialog(false)} color='error'>Cancel</Button>
                    <Button onClick={handleAddFact} variant='contained'>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FactsManagement;