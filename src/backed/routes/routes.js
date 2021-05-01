const express = requiere('express')
const router = express.router()
const SignUpTemplate =  require('/..models/signUpModals')

router.post('/signup', (request, response) =>{
            const signupUser = new SignUpTemplate({
                           name: request.body.name,
                           username:request.body.username,
                           email:request.body.email,
                           password:request.body.password                  
            })

            signupUser.save()
            .then(data =>{
                response.json(data)
            })
            .catch(error =>{
               response.json(error)
            })
})

module.exports = router 

