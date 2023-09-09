import { useState } from 'react'

import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.jpg'

function App() {
  const [queryDesc, setQueryDesc] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted: ", queryDesc)
  }

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="query-description" 
          placeholder="Describe your query"
          onChange={() => setQueryDesc(e.target.value)}
        />
        <input type="submit" value="Generate Query"/>
      </form>

    </main>

  )
}

export default App
