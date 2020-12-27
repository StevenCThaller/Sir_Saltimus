import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
        border: '1px solid black',
        borderTop: '2px solid white',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        background: 'linear-gradient(45deg, #202020, #232f3f)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
        color: 'white',
        fontSize: '17pt'
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const ScheduleAccordion = props => {
    const { panelName, expanded, changeHandler, panelHeader, panelDetails } = props;
    return (
        <Accordion square expanded={ expanded === panelName } onChange={changeHandler(panelName)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>{panelHeader}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    { panelDetails }
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default ScheduleAccordion
