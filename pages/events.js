import { useState } from "react";

function EventList({ eventList }) {
  const [events, setEvents] = useState({ eventList });
  const sportsFilter = async () => {
    const response = await fetch(
      "http://localhost:3004/events?category=sports"
    );
    const data = await response.json();
    console.log(data, "hwere")
    setEvents(data)
  };
  return (
    <div>
      <h1>Here are the EventList</h1>
      <button onClick={sportsFilter}>Sports Filter</button>
      {eventList.map((event) => {
        return (
          <div key={event.id}>
            <h1>
              {event.id} {event.title} |{event.category}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/events");
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
