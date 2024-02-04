const express = require('express')
const customerRoutes = require('./routes/customerRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()


app.use(express.json())


app.use('/customerroutes', customerRoutes)
app.use('/userroutes', userRoutes)
app.use('/productroutes', productRoutes)


app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
});
