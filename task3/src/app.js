const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const path=require("path")
const viewsDirectory=path.join(__dirname,'../temp1/views')
const hbs=require('hbs')
const partialspath=path.join(__dirname,'../temp1/partials')
hbs.registerPartials(partialspath)



const x=path.join(__dirname,'../public')

app.use(express.static(x))


app.set('view engine','hbs')
app.set('views',viewsDirectory)
app.get('/',(req,res)=>{
  res.render('index',{
    title:"90 hub gym",
    desc:"join our amazing world "
  })
})
app.get('/survice',(req,res)=>{
  res.render('survice',{
    title:"our survice",
   
  })
})
app.get('/team',(req,res)=>{
  res.render('team',{
    title:"team page",
    desc:"this is team page ",
     img1:"/images/gymm.jpg",
     info:"coach amgad"
  })
})
app.get('/about',(req,res)=>{
  res.render('about',{
    title:"about us",
    desc:"this is about page "
  })
})
app.get('/contact',(req,res)=>{
  res.render('contact',{
    title:"contact us",
    desc:"this is contact page ",
    mob:"0125897568",
    gmail:"mahmoud.montaser@gmail.com",
    watsapp:"0128899745",
    tele:"0453218177"
  })
})
























app.listen(port, () => {
  console.log("app is work");
});
