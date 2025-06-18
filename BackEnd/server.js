const app = require('./scr/app');

require('dotenv').config();


app.listen(3000,()=>{
    console.log('Server is running on port http://localhost:3000');
})