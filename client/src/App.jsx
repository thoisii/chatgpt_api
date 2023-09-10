import { useState } from 'react'

import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.jpg'

function App() {
  const [queryDesc, setQueryDesc] = useState("");
  const [showQuery, setShowQuery] = useState("Content Here");

  const onSubmit = async (e) => {
    e.preventDefault();
    const sqlQuery = await genQuery();
    setShowQuery(sqlQuery)

    console.log("returned from server: ", sqlQuery);
  }

  const genQuery = async () => {
    const responce = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({queryDesc: queryDesc})
    });

    const date = await responce.json()
    return data.responce.trim(); //cut extra spaces
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
          onChange={(e) => setQueryDesc(e.target.value)}
        />
        <input type="submit" value="Generate Query"/>

        <pre>{showQuery}</pre>
      </form>

    </main>

  )
}

export default App
