const bcrypt = require("bcrypt");

async function hashPassword(pass) {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(pass, salt);
}

hashPassword(pass);
