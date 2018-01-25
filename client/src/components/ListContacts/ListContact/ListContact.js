import React from 'react';

import './ListContact.css';
import { List, Image, Responsive } from 'semantic-ui-react';
import btnCancel from '../../../icons/cancel.svg';

const ListContact = (props) => {
    
    return (
        <List.Item className='listSegment'>
            <Responsive
                minWidth='340'
                maxWidth='450'
                as={Image}
                avatar
                size='mini'
                src={props.imageURL}
            />
            <Responsive
                minWidth='451'
                as={Image}
                avatar
                size='tiny'
                src={props.imageURL}
            />
            <List.Content className='listContact'>
                <List.Header>
                    {props.header}
                </List.Header>
                <List.Description>
                    {props.description}
                </List.Description>
            </List.Content>

            <Image
                className='btnContactDelete'
                size='mini'
                src={btnCancel} />
        </List.Item>
    );
};

export default ListContact;