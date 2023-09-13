import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTask.module.css';
import { useState } from 'react';
import { Tasks } from './Tasks';

export function NewTask (){

    const [tasks, setTasks] = useState([])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(){
        event?.preventDefault()
        
        setTasks([...tasks, {"status":true, "content":newTaskText}]);
        setNewTaskText('')
    }

    function handleNewTaskChange(){
        setNewTaskText(event?.target.value)
    }

    function setTasksFunction (tasks){
        setTasks(tasks);
    }

    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <textarea
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                />

                <button type="submit">Criar <PlusCircle/> </button>
            </form>

            <Tasks 
                tasks={tasks}
                setTasksFunction={setTasksFunction}
            />
        </>
    );
}