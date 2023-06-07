const fs = require('fs')

function writeDataTofile(filename, content){
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err)=>{
        console.log(err)
    })
}

module.exports = { writeDataTofile}