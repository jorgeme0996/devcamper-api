const fs =require('fs');
const mongoose =require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({path: './config/config.env'});

//Load Models
const Bootcamp = require('./models/BootcampModel');

//Conncet to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

//Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

//Import into DB

// Bootcamps
const importsData = async ()=>{
    try {
        await Bootcamp.create(bootcamps);
        console.log('Data imported...'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(err)
    }
}

//Delete data 

// Bootcamps
const deleteData = async ()=>{
    try {
        await Bootcamp.deleteMany();
        console.log('Entre a Delete')
        console.log('Data destroyed...'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(err)
    }
}

// Inicio programa

if(process.argv[2] === '-i'){
    importsData();
} else if(process.argv[2] === '-d'){
    deleteData();
} else {
    console.log('Comando no reconocido');
    process.exit(1);
}