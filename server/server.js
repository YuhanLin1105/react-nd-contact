const express = require('express');

const config = require('./config');

const app = express();

app.get('/',(req,res)=>{
    const help=`
    <pre>
        Welcom to the address book API!
        
        Use a Authentication header to work with your own data:

        fetch(url,{headers:{'Authenticaten':'Whatever-you-want'}});

        The following endpoints are avaliable:

        GET /contacts
        DELETE /contacts/:id
        POST /contacts {name, email, avatarURL}
    </pre>
    `
    res.send(help);
})

app.listen(config.port,()=>{
    console.log(`Server listening on port ${config.port}, Ctrl+C to stop`);
})
