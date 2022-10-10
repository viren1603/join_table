const { employe, deparment } = require('../model/model')
module.exports.EmployeData = async function (req, res) {
    try {
        // let id = req.body.id
        let name = req.body.name
        let email = req.body.email
        // let gen = bcrypt.genSaltSync(10)  :  hashsync alter native
        let password = req.body.password
        let departnemt_id = req.body.departnemt_id
        let savePlayer = await employe.build({
            name, email, password, departnemt_id
        })
        await savePlayer.save()
        res.json({ "messj": "sucess" })
    } catch (error) {
        res.json({ try_catch: error.message })
    }
}

module.exports.deparment = async function (req, res) {
    try {
        // let id = req.body.id
        let department_name = req.body.department_name
        let savePlayer = await deparment.build({
            department_name
        })
        await savePlayer.save()
        res.json({ messj: "sucess" })
    } catch (error) {
        res.json({ try_catch: error.message })
    }
}

