
const express = require('express'); 
const app = express()
app.use(express.json()) 
const dbConnect = require("./db/dbConnect");
const test1 = require("./models/AffectSujet") 
const test2 = require("./models/AffectSup")
const test3 = require("./models/AffectJury")
const Admin = require("./models/test") 



dbConnect();


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
  const sujet = new test1({
    ...req.body
  }); 
  sujet.save() 
    //nom sup 
    // password sup general 12345678 + possiblité de le modifier 
  .then(() => res.status(201).json({ message: 'Donnèes bien enregistrées '}))
  .catch(error => res.status(400).json({ error }));
  console.log(sujet)
})

app.post("/AffectSup", (req, res) => { 
  const Sup = new test2({
    ...req.body
  }); 
  Sup.save()
  .then(() => res.status(201).json({ message: 'Donnèes bien enregistrées ' })) 
  .catch(error => res.status(400).json({ error }));
  console.log(Sup)
  })
    
app.post("/AffectJury", (req, res) => { 
  const jury = new test3({
    ...req.body
  }); 
  jury.save()
  .then(() => res.status(201).json({ message: 'Donnèes bien enregistrées'}))
  .catch(error => res.status(400).json({ error }));
  console.log(jury)
})





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