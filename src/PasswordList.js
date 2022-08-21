import React from 'react'
import { useState } from 'react';
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton, SearchInput, FunctionField, Button } from 'react-admin'
import { useRecordContext } from 'react-admin';

const postFilters = [
    <SearchInput source="search" alwaysOn />
];



export default function PasswordList(props) {

    const PasswordField = ({ source }) => {
        const record = useRecordContext();

        const [value, setValue] = useState("Click to copy & Reveal");    

        const handleClick = () => {
            if(value === record.password){
                setValue("Click to copy & Reveal");
                return;
            }
            console.log(record.password);
            navigator.clipboard.writeText(record.password);
            setValue(record.password);
        }
        return <Button onClick= {handleClick} style={{ color: 'purple', textTransform: 'none'}}> {value} </Button>;
    };

    return <List {...props} filters={postFilters}>
        <Datagrid>
            <TextField source='username'/>
            <PasswordField source='password'/>
            <TextField source='site'/>
        </Datagrid>
    </List>
}


