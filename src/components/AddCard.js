import React from 'react';
import Icon from './Icon';
import AddCardWrapper from '../styles/AddCard/AddCardWrapper';

const AddCard = ()=>{
    return (
        <AddCardWrapper onClick={() => alert("该功能待完善")}>
            <Icon name="add" fill="#c9cdd0"/>
            <div>新建项目组</div>
        </AddCardWrapper>
    )
}

export default AddCard