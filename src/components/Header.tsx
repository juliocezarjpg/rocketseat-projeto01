import styles from './Header.module.css'

import rocketLogo from '../assets/rocket-logo.svg';

export function Header (){
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logotipo de foguete"></img>
            <p>to<span>do</span></p>
        </header>
    );
}