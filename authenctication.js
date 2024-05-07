const jwt = require('jsonwebtoken');

async function generateToken() {
    try {
        const token = await jwt.sign({ data: req.body.password }, secretKey);
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        throw error;
    }
}

async function verifyToken(token) {
    try {
        const decoded = await jwt.verify(token, secretKey);
        console.log("Token is valid");
        return decoded;
    } catch (error) {
        console.error("Token verification failed:", error);
        throw error;
    }
}

module.exports = { generateToken, verifyToken };