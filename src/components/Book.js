

import React from 'react';
import { Datepicker } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useState } from 'react';
import moment from 'moment'


const today = moment();
const date= today.format('YYYY-MM-DD')+"T00:00"
const Book = () => {
    const [selected, setSelected] = useState(null);
    const onSelectedChange = (ev) => {
        setSelected(ev.value);
    };
    return (

        <div className='m-5'>
                   <Datepicker
            controls={['calendar', 'timegrid']}
            min={date}
            max="2222-12-11T00:00"
            stepMinute={60}
            returnFormat='locale'
            display="inline"
            invalid={[{
                start: '2022-02-12T08:00',
                end: '2022-02-12T13:00'
            }, {
                start: '2022-02-11T15:00',
                end: '2022-02-11T17:00'
            }, {
                start: '2022-02-12T19:00',
                end: '2022-02-12T19:00'
            }]}
            onChange={onSelectedChange}
            />
        </div>
     
    );
}
export default Book;