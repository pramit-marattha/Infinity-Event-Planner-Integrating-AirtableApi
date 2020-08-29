import React from 'react';
import './App.css';
import Airtable from 'airtable';
import Event from './components/Event';
import styled from 'styled-components';
import { GlobalStyle } from './styles/Global.style';


const base = new Airtable({ apiKey: "keykp63Poyf3MMZY1" }).base('appv7xzyF11IFZe8a');

const StyledHeadingOne = styled.h1`
text-align: center;
font-size:3rem;
margin:1rem 0;
`

function App() {
  const [events, setEvents] = React.useState([])
  const [updates, setUpdate] = React.useState([])


  React.useEffect(() => {
    base("events").select({ view: "Grid view" }).eachPage((records, fetchNextPage) => {
      setEvents(records);
      fetchNextPage();
    });
    base("updates").select({ view: "Grid view" }).eachPage((records, fetchNextPage) => {
      setUpdate(records);
      fetchNextPage();
    });

  }, [])

  return (
    <>
      <GlobalStyle />
      <StyledHeadingOne>Event Planner</StyledHeadingOne>
      {events.map(event => (
        <Event
          key={event.id}
          event={event}
          updates={updates.filter(update => update.fields.eventid[0] == event.id)}
        />
      ))}
    </>


  );
}

export default App;
