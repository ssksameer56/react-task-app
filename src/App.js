import React, { Fragment, useState } from 'react'       
import NavBar from './NavBar'
import Task from './Task'
import {Grid} from '@material-ui/core'
import { Button, CardActions } from '@material-ui/core';
import {Card, CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

function handleEditCancel(e, updateTaskList, id, tasks){
        e.preventDefault()
        const oldTask = tasks[id].task
        const newTasks = tasks.map((task,i) =>{
                if(i === id)
                        return {task: task.task, edit: !task.edit, status: task.status}                       
                else 
                        return {task: task.task, edit: false, status: task.status}})
        updateTaskList(newTasks)
}

function handleDelete(e, updateTaskList, id, tasks){
        e.preventDefault()
        const newTasks = tasks.splice(id+1, 1);
        console.log(newTasks)
        updateTaskList(newTasks)
}
function changeStatus(e, updateTaskList, id, tasks){
        e.preventDefault()
        const newTasks = tasks.map((task,i) =>{
                if(i === id)
                        return {task: task.task, edit: task.edit,status: !task.status}                       
                else 
                        return task})
        updateTaskList(newTasks)
}

function addTask(e, newTask, updateTaskList, updateTask) {
        e.preventDefault();
        const task = {
                task: newTask,
                status: false,
                edit: false
        }
        updateTaskList(prevState => {
                return [...prevState, task]
              })
        updateTask("")
}

function App(){
        const[tasks, updateTaskList] = useState([])
        const [newTask, updateTask] = useState("")
        return(
                <Fragment>
                <NavBar tasklist={tasks}></NavBar>
                <Grid container justify='center'>
                <Grid item sm={8}>
                <CardContent>
                <form noValidate autoComplete="off">
                <TextField id="standard-basic" value={newTask} label="Enter Task" fullWidth='true' onChange={(e) =>{updateTask(e.target.value)}}/>
                </form>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" small color='primary' onClick={(e) => {addTask(e, newTask, updateTaskList, updateTask)}}>Add Task</Button>
                </CardActions></Grid>
                </Grid>
                {tasks.map((task,i) => {return(
                <Grid container justify='center'>
                <Grid item sm={6}><Task id = {i} key={i} task={task}
                ValueChange
                EditCancel={(e) => {handleEditCancel(e,updateTaskList, i, tasks)}}
                onDelete={(e) => {handleDelete(e,updateTaskList, i, tasks)}}
                changeStatus={(e) => {changeStatus(e,updateTaskList, i, tasks)}}
                onSave={handleSave}></Task></Grid>
                </Grid>
                )})}
                </Fragment>
        )
}

export default App;