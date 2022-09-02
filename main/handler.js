'use strict'

module.exports = async (event, context) => {
    var parameters=JSON.stringify(event.body)
  return context
    .status(200)
    .succeed(parameters)
}
