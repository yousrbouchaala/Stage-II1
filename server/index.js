
const express = require('express'); 

const app = express()

app.use(express.json())
  
const dbConnect = require("./db/dbConnect");
const test = require("./models/AffectJury")

const testt = require("./models/AffectSujet") 

const testtt = require("./models/AffectSup")

const Admin = require("./models/test") 



dbConnect();
// Curb Cores Error by adding a header here




app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    title: 'Apis'
  });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    console.log(email)
    console.log(password)
	/* const user = User.findOne({ email }).lean()

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid username/password' })
    }
        if (bcrypt.compare(password, user.password)) {
            // the username, password combination is successful

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email
                },
                JWT_SECRET
            )
            res.status(200).send({
                message: "Login Successful",
                email: user.email,
                token,
            });
            console.log('okkkkk')
            return res.json({ status: 'ok', data: token })
        }

        res.json({ status: 'error', error: 'Invalid username/password' }) */
    Admin.findOne({ Email: req.body.email })
    .then((user) => 
    {
       /* console.log(user)
        res.send(user).status(200) */
        if (user.password === req.body.password) {
            res.send("password matche").status(200)
        } 
        else { res.send("password wrong").status(404)

        }
        

        
    } )
    .catch((e) => {
        res.send("user nor exist").status(500) 
    } ) 
     
})
app.post("/AffectSujet", (req, res) => { 
  const sujet = new testt({
    ...req.body
  }); 
  sujet.save()
  console.log(sujet) 
      console.log("hellooooooooooooo")
   .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
  .catch(error => res.status(400).json({ error }));
})


// login endpoint
/*app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(400).send({
        message: "Email not found",
        e,
      });
    });
}); */ 

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", (request, response) => {
  response.json({ message: "You are authorized to access me" });
});
app.listen(3001, () => {
    console.log(" server running on port 3001 ");
}); 