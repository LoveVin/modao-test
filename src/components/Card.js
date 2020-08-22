import React from 'react';
import Icon from './Icon'
import CardWrapper from './card/CardWrapper';
import MainColor from './card/MainColor';
import GroupInfo from './card/GroupInfo';

const Card = (props) => {
    return (
        <CardWrapper locked={props.locked}>
            <MainColor color={props.color}/>
            <GroupInfo locked={props.locked} private={props.private}>
                <div className="title">{props.groupName}</div>
                <div>
                    <button className="lock">
                        <Icon name="lock" fill="#8f9da4"/>
                        <span>锁定</span>
                    </button>
                    <button className="limit">
                        <Icon name="view-off" fill="#8f9da4"/>
                        <span>私密</span>
                    </button>
                </div>
                <div>
                    <span>{props.itemCount}</span>
                    项目
                </div>
            </GroupInfo>
        </CardWrapper>
    );
};

export default Card;
