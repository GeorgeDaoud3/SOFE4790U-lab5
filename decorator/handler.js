'use strict'
const request = require('sync-request');

module.exports = async (event, context) => {
    var obj = event.body;
    if (obj['Name'] === undefined) {
        obj['Name'] = 'Nameless';
    }
    if (obj['Color'] === undefined) {
        obj['Color'] = 'Transparent';
    }
    var res = request('POST', 'http://35.203.76.149:8080/function/main', {

        body: JSON.stringify(obj)
      
      });
      
      console.log(res["body"].toString())
    return context.status(200).succeed(res["body"].toString('utf8', 1, res["body"].length-1).replace(/\\\"/g,'\"'));
}