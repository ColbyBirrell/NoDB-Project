const config = require('../src/config')
const axios = require('axios')


const chores = [
    {
        chore: "make more chore items",
        id: 0
    }
]

let id = 1

let weatherInfo = 1
// let weatherSummary = ''


module.exports = {

    getChores(req, res) {
        res.status(200).send(chores)
    },

    makeChores(req, res) {

        const { chore } = req.body
        const newChore = {
            chore,
            id
        }

        id++

        chores.push(newChore)

        res.status(200).send(chores)

    },

    editChores(req, res) {
        const { id } = req.params
        const { chore } = req.body

        const index = chores.findIndex((element) => {
            return element.id === +id
        })

        chores[index].chore = chore

        res.status(200).send(chores)

    },

    deleteChores(req, res) {
        const { id } = req.params

        const index = chores.findIndex((element) => {
            return element.id === +id
        })

        chores.splice(index, 1)

        res.status(200).send(chores)
    },

    getWeather(req, response) {
        axios.get(`https://api.darksky.net/forecast/${config.weatherSecret}/40.4463,-111.8021`).then((res) => {
            weatherInfo = (parseInt(res.data.currently.temperature))
            // weatherSummary = (res.data.currently.summary)
            response.status(200).send(`${weatherInfo}`)
        })


    }




}