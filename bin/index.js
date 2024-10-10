#! /usr/bin/env node
const username = process.argv[2];

if(username == undefined) {
    console.log('Please provide a username.');
    return;
}
const https = require('https'); 
const utils = require('../src/utils');

const options = {
    hostname: "api.github.com",
    port: 443,
    path: `/users/${username}/events`,
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'User-Agent': 'synchoz',
    }
}

https.get(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { 
        data += chunk; 
    }); 
    res.on('end', () => { 
        jsonData = JSON.parse(data); 
        utils.PrintEvents(jsonData);
    }); 
}).on('error', (error) => {
    if(error.message = "Not Found") {
        console.error(`Error fetching data: User ${error.message}`); 
    } else {
        console.log(error.message);
    }
});
