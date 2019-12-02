import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions } from '@material-ui/core';
import {Card, CardContent} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    title:{
        fontSize: 14
    },
    card:{
        flex:1,
        marginBottom:10,
    },
    text:{
        textDecoration:'line-through'
    }
})
function handleSave(e, id, newTask, updateTaskList){
    e.preventDefault();
        const task = {
                task: newTask,
                status: false,
                edit: false
        }
    
}

function Task(props){
    const style = useStyles();
    const [task, setTask] = useState(props.task.task)
    const doneState = props.task.status? 'Mark Undone' : 'Mark Done';
    const doneStyle = props.task.status? {backgroundColor: '#22c738'}: {backgroundColor: '#f21b1b'}
    const formField = () => {
        if(props.task.edit === true){
            return (
            <Fragment>
                <CardContent>
                <form noValidate autoComplete="off">
                <TextField id="standard-basic" value={task} label="Enter Task" fullWidth='true'
                onChange={(e)=>{setTask(e.target.value)}} />
                </form>
                </CardContent>
                <CardActions>
                 <Button small color='primary' onClick={(e)=>handleSave(e,props.id, task,props.updateTaskList)}>Save</Button>
                 <Button small color='secondary' onClick={props.EditCancel}>Cancel</Button>
                 </CardActions>
                </Fragment>)
        }
        else{
            return(<Fragment>
            <CardContent style={doneStyle}>
                <Typography display='inline' variant='text-secondary'>{props.task.task}</Typography>
            </CardContent>
            <CardActions>
            <Button display='inline' small color='primary' onClick={props.EditCancel}>Edit</Button>
            <Button display='inline' small color='secondary' onClick={props.onDelete}>Delete</Button>
            <Button display='inline' small color='primary' onClick={props.changeStatus}>{doneState}</Button>
            </CardActions>
            </Fragment>
    );
        }
    }
    return(
    <Card className={style.card}>
    {formField()}
    </Card>
    )
}

export default Task