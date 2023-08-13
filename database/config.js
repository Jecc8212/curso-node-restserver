const mongoose = require('mongoose');

const dbConnection = async() =>{

    try {
    
      await mongoose.connect( process.env.MONGO_ATLAS, {

      } )

      console.log('base de datos online');



    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de levantar el proceso')
    }


}

module.exports	= {
    dbConnection
}