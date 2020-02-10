const express = require('express')

const ctrl = require('./controllers')

const app = express()
const PORT = 5678  //'cause Im immature...

app.use(express.json())

//endpoints
app.get(`/api/chores`, ctrl.getChores)
app.post(`/api/chores`, ctrl.makeChores)
app.put(`/api/chores/:id`, ctrl.editChores)
app.delete(`/api/chores/:id`, ctrl.deleteChores)

app.get(`/api/weather`, ctrl.getWeather)




app.listen(PORT, () => { console.log(`<--- Listening on port ${PORT} --->`) })