import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
      async function fetchDashboardData(){
        const response = await fetch('http://localhost:3004/dashboard')
        const data = await response.json()

        setDashboardData(data);
        setIsLoading(false);
      }

      fetchDashboardData()
    
      
    }, [])
    
    if(isLoading){
        return <h1>Loading mate, dont rush me</h1>
    }

  return (
    <div><h1>Dashboard</h1>
        <h3>Posts - {dashboardData.posts}</h3>
        <h3>Likes - {dashboardData.likes}</h3>
        <h3>Followers - {dashboardData.followers}</h3>
        <h3>Following - {dashboardData.following}</h3>
    </div>
  )
}

export default Dashboard
