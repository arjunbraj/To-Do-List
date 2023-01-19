const mongoose = require('mongoose');
//  to avoid depreciation error
mongoose.set('strictQuery', true);

// connecting to database
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/to_di_list_dev');
}

main().catch(err => console.log(err));