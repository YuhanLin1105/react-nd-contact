import React from 'react';

import ListContact from './ListContact/ListContact';
import { List } from 'semantic-ui-react';

const ListContacts = (props) => {
    let contacts = null;

    if (props.contacts) {
        contacts = props.contacts.map(contact => {
            return <ListContact
                key={contact.id}
                id={contact.id}
                imageURL={contact.avatarURL}
                header={contact.name}
                description={contact.email}
            />
        })
    }



    return (
        <List divided relaxed verticalAlign='middle'  >
            {contacts}
        </List>
    );
}

export default ListContacts;