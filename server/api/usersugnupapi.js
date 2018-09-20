app.post('/api/user', (req, res) => {
    var user = new UserModel(req.body);
    user.save()
        .then(user => {
            console.log(user)
        })
        .catch(err => {
            console.log(err)
        })
    res.send(user)

})