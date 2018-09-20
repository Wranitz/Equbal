app.get('/api/login', (req,res) => {
    /*UserModel.findOne({username : req.query.username}, (err,user) => {
        console.log(user)
        console.log(req.query)
        if (req.query.password == user.password){
            res.send('login sucessfull')
        } else {
            res.send('Login incorrect')
        }
    })*/
    var user_query = UserModel.findOne({username : req.query.username});
    user_query.exec().then(function(user) {
        console.log(user)
        if (user == null) {
            res.send('no user found')
        } else if ( req.query.password == user.password ) {
            res.send('login sucessfull')
        }
    }).catch(function (err) {
        console.log(err)
    });
})