const Car = require ("../models/cars")

const router=require("express").Router()

router.get('/cars', async (req, res) => {
  const cars = await Car.find()
  res.render('cars/index.ejs', { cars })
})
router.get('/cars/new', (req, res) => {
  res.render('cars/new.ejs')
})
router.post('/cars', async (req, res) => {
  await Car.create(req.body)
  res.redirect('cars/new') 
  }
 
)


router.get('/cars/:carsid', async (req, res) => {
  const car = await Car.findById(req.params.carsid)
  res.render('cars/show.ejs', { car })
})

router.delete('/cars/:carid', async (req, res) => {
  await Car.findByIdAndDelete(req.params.carid)
  res.redirect('/cars')
})

router.get('/cars/:carid/edit', async (req, res) => {
  const car = await Car.findById(req.params.carid)
  res.render('cars/edit.ejs', { car })
})

router.put("/cars/:carid" , async (req,res) =>{

await Car.findByIdAndUpdate(req.params.carid,req.body)
res.redirect(`/cars/${req.params.carid}`)

})


module.exports=router