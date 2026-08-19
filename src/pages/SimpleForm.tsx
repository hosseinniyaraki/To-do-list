


import { Box, Button, ListItem, ListItemText, Paper, TextField, Typography } from "@mui/material";
import type { ChangeEvent, SyntheticEvent } from "react";
import { useState } from "react"



type Item={
  Inpt: string;
  id: number;
  done: boolean
}

const ThemeForm = () => {
  const [Inpt, setInpt] = useState<string>("");
  const [Item, setItem] = useState<Item[]>([]);
  const [EditText, setEditText] = useState<string>("");
  const [EditingId, setEditingId] = useState<number | null>(null);


  const handlechange = (e:ChangeEvent<HTMLInputElement>)=>{
    setInpt(e.target.value);
  };

  const handleSubmit =(e:SyntheticEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(Inpt.trim()==="")return;
    const newItem:Item={id:Date.now(), Inpt, done:false}
    setItem([...Item, newItem]);
    setInpt('');
  }



  return (
    <Paper
    // sx={{minWidth:20}}
    >
      <Typography>
        to do list
      </Typography>

      <Box 
      component='form' 
      onSubmit={handleSubmit}
      >
      
      <TextField 
      placeholder="type"     
      value={Inpt}           
      onChange={handlechange}
      />
      <Button variant="contained" type="submit">send</Button>

      </Box>
      {
        Item.map((Item)=>(
          <ListItem key={Item.id}>
            <ListItemText />
          </ListItem>
        ))
      }
      
    </Paper>
    
  )

}

export default ThemeForm