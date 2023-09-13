import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import checkedImage from '../assets/checked.svg';
import uncheckedImage from '../assets/unchecked.svg';

export function Task({content, status, onDeleteTask, onChangeCheckTask}){

    const imageSrc = status ? uncheckedImage : checkedImage;
    const imageAlt = status ? "unchecked" : "checked"
    const textColorClass = status ? styles.checked : styles.unchecked;

    function handleDeleteTask(){
        onDeleteTask(content)
    }

    function handleStatusChangeTask(){
        onChangeCheckTask(content)
    }

    return (
    <div className={styles.task}>
        <button onClick={handleStatusChangeTask} type="button"> <img src={imageSrc} alt={imageAlt}></img> </button>
        <p className={textColorClass}>{content}</p>
        <button onClick={handleDeleteTask} title='Deletar task'>
            <Trash />
        </button>
    </div>
    );
}
