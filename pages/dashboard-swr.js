import useSWR from "swr";
const fetcher = async () => {
  const response = await fetch("http://localhost:3004/dashboard");
  const data = await response.json();
  return data;
};

function DashboardSWR() {
  const {data, error} = useSWR("dashboard", fetcher);

  if(error) return 'Error here';
  if(!data) return 'Loading'

  return (
    <div><h1>Dashboard</h1>
        <h3>Posts - {data.posts}</h3>
        <h3>Likes - {data.likes}</h3>
        <h3>Followers - {data.followers}</h3>
        <h3>Following - {data.following}</h3>
    </div>
  )
}

export default DashboardSWR;
