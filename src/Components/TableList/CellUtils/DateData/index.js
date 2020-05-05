import React from 'react';
import { format } from 'date-fns'
import Box from '@material-ui/core/Box';
import { DateRange,Schedule } from '@material-ui/icons';
import useStyle from './styles';

const TimeData = ({date,format_date,format_time}) =>{
    const xdate=new Date(date);
    if(format_time){
        return (<Box justifyContent="center" p={0} m={0}>
            <h5>{format(xdate,format_date)}</h5>
            <h6>{format(xdate,format_time)}</h6>
        </Box>)
    }
    return <h5>{format(xdate,format_date)}</h5>;
}

const DateData = ({ date,format_date,format_time,color }) => {
    const classes = useStyle({ color: color });
    
    return (
        <Box p={0} m={0} className={classes.date_data}>
            {format_date && <Box display="flex" alignItems="center" flexWrap="nowrap" p={0} m={0}>
                <DateRange/><TimeData date={date} format_date={format_date} format_time={format_time} />
            </Box>}
        </Box>
    );
};

export default DateData;