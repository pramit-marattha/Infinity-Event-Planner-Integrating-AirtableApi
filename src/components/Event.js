import React from 'react';
import StyledEvent from '../styles/StyledEvent';
import StyledCheckbox from '../styles/StyledCheckbox';
import StyledEventDes from '../styles/StyledEventDes';

const Event = ({ event, updates }) => {
    return (
        <StyledEvent>

            <h1><label>
                <input type="checkbox" defaultChecked={event.fields.Checked} disabled />
            </label>&nbsp;&nbsp;{event.fields.Title}</h1>

            <StyledEventDes>

                <h3>Event Description</h3>
                <p>{event.fields.Description}</p>
                <h3>UPDATES</h3>
                {updates.map((update, index) => (
                    <p key={index}>{update.fields.update}</p>
                ))}
            </StyledEventDes>
        </StyledEvent>
    );
};

export default Event;