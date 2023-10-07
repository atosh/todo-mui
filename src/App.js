import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todos';
import { AppBar, Button, List, ListItem, ListItemText, Input, Toolbar, Typography } from '@mui/material';
import './App.css';

const TodoApp = () => {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">Todo App</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 16 }}>
        <Input
          type="text"
          placeholder='Add todo'
          value={input}
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>Add</Button>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={`・${item}`} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default TodoApp;