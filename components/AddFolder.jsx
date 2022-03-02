import React, { useState } from 'react';

import { 
    Button, TextField, Dialog,
    DialogActions, DialogContent, DialogTitle
} from '@mui/material';

export default function AddFolder({ open, close, add }){
    const [name, setName] = useState("");

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>Rename Folder</DialogTitle>
            <DialogContent>
                <TextField 
                    autoFocus
                    margin="dense"
                    label="new folder name" type="text"
                    fullWidth variant="standard"
                    value={name} onChange={e => setName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={add(name)}>Add Folder</Button>
            </DialogActions>
        </Dialog>
    );
}