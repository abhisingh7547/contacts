import { Button, Dialog, DialogActions, DialogContent,  DialogTitle, Fab, Grid, TextField } from '@mui/material';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import { Container } from '@mui/system';
import { useState } from 'react';

import contactlist from './data/contactlist';

function App() {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")

  const [data,setData] = useState(contactlist);
  const [tempData, setTempData] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInsert = () => {
    let newArray = {id:data.length+1, name,number:contact,email};
    setData([...data,newArray]);
    handleClose();
  }
   const handleDelete =(id)=>{
     console.log("delete +" + id);
     let newArray 

   }

   const handleSearching = (searchData) =>{
     if(searchData !== ""){
       setTempData(data.filter((item) =>{
        if(item.name.toLowerCase().includes(searchData.toLowerCase())){
            return item;
          }
       }));
       setData(tempData);
     }
     else{
       setData(data);
     }
   }

  return (
    <>
      <Header  search={(d)=>handleSearching(d)}/>
      <Content contactData={data} handleDelete={(id) => handleDelete(id)}/>
      <Container>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Add</DialogTitle>
          <DialogContent>
            <Grid sx={{display:"flex"}} spacing={1}>
              <TextField fullWidth placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>

            <Grid spacing={1} sx={{marginTop:2,display:"flex"}}>
              <TextField fullWidth placeholder='Contact' value={contact}  onChange={(e) => setContact(e.target.value)}/>
            </Grid>

            <Grid spacing={1} sx={{marginTop:2,display:"flex"}}>
              <TextField fullWidth placeholder='Email' value={email}  onChange={(e) => setEmail(e.target.value)}/>
            </Grid>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleInsert()} variant="contained" color="success">Add</Button>
          </DialogActions>
        </Dialog>



        <Fab color='primary' onClick={handleClickOpen} aria-label='add' sx={{ position: "absolute", right: 40, bottom: 30 }}>
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}

export default App;
