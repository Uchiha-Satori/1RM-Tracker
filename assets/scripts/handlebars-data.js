const oneRepMaxHandlebars = function (data, dataID) {
  const oneRepMaxHandlebarsTemplate = require('./templates/one-rep-max-template.handlebars')
  const records = data.records.map(record => {
    delete record.id
    return record
  })

  const context = {
    'records': records,
    'dataID': dataID
  }
  console.log(context)
  const oneRepMaxTemplate = oneRepMaxHandlebarsTemplate(context)
  $('#stat-table').append(oneRepMaxTemplate)
}

module.exports = {
  oneRepMaxHandlebars
}
