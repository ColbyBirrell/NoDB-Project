const chores = [
    {
        chore: `chore one`
    }
]

let id = 0


module.exports = {

    getChores(req, res) {
        res.status(200).send(chores)
    },

    makeChores(req, res) {
        // const {chore} = req.body
        // chore.id = id
        // id++

        // chores.push(chore)



    },

    editChores(req, res) {
        // const { id } = req.params
        // const { chore } = req.body


    },

    deleteChores(req, res) {
        // const { id } = req.params


    }



}