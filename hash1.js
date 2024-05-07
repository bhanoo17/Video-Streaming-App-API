const bcrypt = require('bcrypt');



async function hashPassword(pass) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(pass, salt);
        return hashed;
    } catch (error) {
        // Handle error appropriately
        console.error("Error generating password:", error);
        throw error; // Rethrow error for handling outside this function if needed
    }
}

// Now I am going to Dcrypt password
async function dcryptPassword(oldpass, hashed) {
    try {
        const pass = await bcrypt.compare(oldpass, hashed)
        if (pass) {
            console.log("Password is correct");
        }
        return console.log("Password is rwrong");   
    } catch (error) {
        console.error("Something went wrong while comparing pass:", error);
        throw error; 
    }
}


module.exports = { hashPassword, dcryptPassword }