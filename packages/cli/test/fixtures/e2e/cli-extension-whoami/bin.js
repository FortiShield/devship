#!/usr/bin/env node
const { get } = require('http');

const { KHULNASOFT_API } = process.env;
console.log('Hello from a CLI extension!');
console.log(`KHULNASOFT_API: ${KHULNASOFT_API}`);

get(`${KHULNASOFT_API}/v2/user`, async (res) => {
    let body = '';
    res.setEncoding('utf8');
    for await (const chunk of res) {
        body += chunk;
    }
    const data = JSON.parse(body);
    console.log(`Username: ${data.user.username}`);
});