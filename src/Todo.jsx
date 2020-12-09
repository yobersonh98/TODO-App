import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Modal,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #c2c2c2",
    boxShadow: theme.shadows[15],
    padding: theme.spacing(2, 4, 4),
  },
}));

const Todo = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  /* const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */

  const updateTodo = () => {
    //UPDATE THE TODO WITH THE NEW INPUT TEXT

    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="Editar Tarea"
        aria-describedby="Es una ventana modal para editar tareas"
      >
        <div className={classes.paper}>
          <FormControl>
            <InputLabel>Editar Tarea ✍🏼</InputLabel>
            <Input
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              onClick={(e) => updateTodo()}
              color="primary"
              variant="contained"
            >
              Editar Tarea
            </Button>
          </FormControl>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="DDL Flexible ⏰" />
        </ListItem>
        <IconButton onClick={(e) => setOpen(true)} color="primary">
          <EditIcon></EditIcon>
        </IconButton>
        <IconButton
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
          color="secondary"
        >
          <DeleteForeverIcon></DeleteForeverIcon>
        </IconButton>
      </List>
    </>
  );
};

export default Todo;
