import React, { useState, useEffect } from 'react'
import './Home.css'

function Home() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        async function loadData() {
            const data = await fetch('http://localhost:3000/jobs')
            const response = await data.json()
            setJobs(response)
        }
        loadData()
    }, [])
    return (
        <main id="Home" className="homepage">
            <h2>Jobs Available</h2><br/>
            <ul class="joblist">
            {jobs.map((element) => {
                return (
                    <>
                        <li id={element.id}>
                            <h3>Parent: {element.parent_id}</h3>
                            <h3>Child: {element.child}</h3>
                            <h3>Location: {element.location}</h3>
                            <h3>Contact: {element.contact}</h3>
                            <h3>Decription: {element.description}</h3>
                        </li>
                    </>
                )
            })}
            </ul>
     
        </main>)
}

export default Home;