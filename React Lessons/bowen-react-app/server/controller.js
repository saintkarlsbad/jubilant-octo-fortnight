module.exports = {
    
    createProfile: (req,res) => {
        const db = req.app.get('db');

    },

    getUsers: (req,res) => {
        const db = req.app.get('db');
        db.display_users().then(users => {
            res.send(users)
        })
    }
}