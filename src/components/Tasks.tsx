import styles from './Tasks.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';

export function Tasks({tasks, setTasksFunction}){
    
    const emptyClass = tasks.length == 0 ? styles.show : styles.hide;

    function deleteTask(contentToDelete){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.content != contentToDelete;
        })
        setTasksFunction(tasksWithoutDeletedOne);
    }

    function changeStatusTask(contentToChange){

        const newTasks = [...tasks];

        const taskToChange = newTasks.find(task => task.content === contentToChange);
        taskToChange.status = !taskToChange.status;
        
        setTasksFunction(newTasks);

    }

    
    return (
        <div className={styles.tasks}> 
            <div className={styles.info}>
                <p>Tarefas criadas</p>
                <p className={styles.counter}>{tasks.length}</p>
                <span></span>
                <p>Concluídas</p>
                <p className={styles.counter}>{tasks.filter(task => !task.status).length} de {tasks.length}</p>
            </div>

            <div className={emptyClass}>
                <img src={clipboard} alt="Clipboard"></img>
                <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>

            {tasks.map(task => {
               return (
                <Task 
                    key={task.content}
                    content={task.content}
                    status={task.status}
                    onDeleteTask={deleteTask}
                    onChangeCheckTask={changeStatusTask}
                />
               )
            })}
        
        </div>
    );
}