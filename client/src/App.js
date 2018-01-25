import React, { Component } from 'react';
import _ from 'lodash';

import './App.css'
import ListContacts from './components/ListContacts/ListContacts';
import { Container, Menu, Image, Input } from 'semantic-ui-react';
import btnAddUser from './icons/person-add.svg';


class App extends Component {
    state = {
        contacts: [
            {
                id: 'ryan',
                name: 'Ryan Florence',
                email: 'ryan@reacttraining.com',
                avatarURL: 'http://localhost:5001' + '/ryan.jpg'
            },
            {
                id: 'michael',
                name: 'Michael Jackson',
                email: 'michael@reacttaining.com',
                avatarURL: 'http://localhost:5001' + '/michael.jpg'
            },
            {
                id: 'tyler',
                name: 'Tyler McGinnis',
                email: 'tyler@reacttaining.com',
                avatarURL: 'http://localhost:5001' + '/tyler.jpg'
            }
        ],
        query:{
            value:''
        }
    }


    updateQuery=(val)=>{
        this.setState({
            query:{
                value:val
            }
        })

    }

    render() {
        
        let showingContacts;
        if(this.state.query.value){
            const match = new RegExp(_.escapeRegExp(this.state.query.value),'i');
            showingContacts=this.state.contacts.filter(contact=>match.test(contact.name));
        }else{
            showingContacts=this.state.contacts;
        }

        return (
            <Container>
                <Menu borderless>
                    <Menu.Item style={{ width: '100%' }}>
                        <Input
                            value={this.state.query.value}
                            onChange={(event)=>this.updateQuery(event.target.value)}
                            transparent
                            size='huge'
                            icon='search'
                            iconPosition='left'
                            placeholder='Search...' />
                        <Image
                            size='mini'
                            src={btnAddUser} />

                    </Menu.Item>
                </Menu>
                <ListContacts contacts={showingContacts} />
            </Container>
        );
    }
}

export default App;