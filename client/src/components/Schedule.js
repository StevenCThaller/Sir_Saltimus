import React, { useState } from 'react'
import ScheduleAccordion from './ScheduleAccordion';


const Schedule = () => {
    const [expanded, setExpanded] = useState('panel4');

    const changeHandler = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }

    return (
        <div>
            <ScheduleAccordion 
                expanded={expanded} 
                changeHandler={changeHandler}
                panelName="panel1"
                panelHeader="Monday"
                panelDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestias, sit at doloribus eos dignissimos laborum repellendus enim voluptates nostrum ad praesentium quidem eaque consequuntur et optio vero aliquid numquam."  
            />
            <ScheduleAccordion 
                expanded={expanded} 
                changeHandler={changeHandler}
                panelName="panel2"
                panelHeader="Tuesday"
                panelDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestias, sit at doloribus eos dignissimos laborum repellendus enim voluptates nostrum ad praesentium quidem eaque consequuntur et optio vero aliquid numquam."  
            />
            <ScheduleAccordion 
                expanded={expanded} 
                changeHandler={changeHandler}
                panelName="panel3"
                panelHeader="Wednesday"
                panelDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestias, sit at doloribus eos dignissimos laborum repellendus enim voluptates nostrum ad praesentium quidem eaque consequuntur et optio vero aliquid numquam."  
            />
            <ScheduleAccordion 
                expanded={expanded} 
                changeHandler={changeHandler}
                panelName="panel4"
                panelHeader="Thursday"
                panelDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestias, sit at doloribus eos dignissimos laborum repellendus enim voluptates nostrum ad praesentium quidem eaque consequuntur et optio vero aliquid numquam."  
            />
            <ScheduleAccordion 
                expanded={expanded} 
                changeHandler={changeHandler}
                panelName="panel5"
                panelHeader="Friday"
                panelDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestias, sit at doloribus eos dignissimos laborum repellendus enim voluptates nostrum ad praesentium quidem eaque consequuntur et optio vero aliquid numquam."  
            />
            <ScheduleAccordion 
                expanded={expanded} 
                changeHandler={changeHandler}
                panelName="panel6"
                panelHeader="Saturday"
                panelDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestias, sit at doloribus eos dignissimos laborum repellendus enim voluptates nostrum ad praesentium quidem eaque consequuntur et optio vero aliquid numquam."  
            />
            <ScheduleAccordion 
                expanded={expanded} 
                changeHandler={changeHandler}
                panelName="panel7"
                panelHeader="Sunday"
                panelDetails="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum molestias, sit at doloribus eos dignissimos laborum repellendus enim voluptates nostrum ad praesentium quidem eaque consequuntur et optio vero aliquid numquam."  
            />

        </div>
    )
}

export default Schedule
