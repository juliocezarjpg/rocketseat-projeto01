import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { NewTask } from './components/NewTask'

export function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask />
      </div>

    </div>
   
  )
}
