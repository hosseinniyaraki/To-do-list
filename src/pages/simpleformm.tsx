
import {
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

type Item = {  
  Text: string; 
  id: number;   
  done: boolean;
};

export default function simpleformm() {
  const [Text, setText] = useState<string>("");
  const [Item, setItem] = useState<Item[]>([]);
  const [EditText, setEditText] = useState<string>("");
  const [EditingId, setEditingId] = useState<number | null>(null);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Text.trim() === "") return;
    const newItem: Item = { id: Date.now(), Text, done: false };
    setItem([...Item, newItem]);
    setText("");
  };

  const handleDelet = (id: number) => {
    setItem(Item.filter((i) => i.id !== id));
  };

  const handleToggle = (id: number) => {
    setItem(
      Item.map((Item) =>
        Item.id === id ? { ...Item, done: !Item.done } : Item,
      ),
    );  
  };    

  const handleEdit = (Item: Item) => {
    setEditingId(Item.id);
    setEditText(Item.Text);
  };

  const handleEditSave = (id: number) => {
    setItem(
      Item.map((Item) => (Item.id === id ? { ...Item, Text: EditText } : Item)),
    );
    setEditingId(null);
  };

  return (
    <Paper>
      <Typography>To Do List</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <TextField
          onChange={handleChange}
          value={Text}
          size="small"
          placeholder="type"
          sx={{
            size: "small",
          }}
        />
        
        <Button variant="contained" type="submit">  
          send
        </Button>
      </Box>

      {Item.map((Item) => (
        <ListItem key={Item.id}>
          <Checkbox
            checked={Item.done}
            onChange={() => handleToggle(Item.id)}
          />
          
          {EditingId === Item.id ? (
            <TextField
              size="small"
              value={EditText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => handleEditSave(Item.id)}
              autoFocus
            />
          ) : (
            <ListItemText
              primary={Item.Text}
              onDoubleClick={() => handleEdit(Item)}
              sx={{ textDecoration: Item.done ? "line-through" : "none" }}
            />
          )}

          <IconButton onClick={() => handleDelet(Item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </Paper>
  );
}