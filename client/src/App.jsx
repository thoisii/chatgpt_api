import { useState } from 'react'

import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.jpg'

function App() {
  //user query content
  const [queryDesc, setQueryDesc] = useState("");
  //responce content
  const [showQuery, setShowQuery] = useState("Content Here");

  //submit function
  const onSubmit = async (e) => {
    e.preventDefault();
    const sqlQuery = await genQuery();
    setShowQuery(sqlQuery)

    console.log("returned from server: ", sqlQuery);
  }

  //api call to backend
  const genQuery = async () => {
    const responce = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({queryDesc: queryDesc})
    });

    const date = await responce.json()
    return data.responce.trim(); //cut extra spaces
  }

  //html page
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>API calls with openAI</h3>

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
