// Hash password before saving user
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);
    return hashPassword;
};
// Compare entered password with hashed password
const comparePassword = async(password,hashedPassword) =>{
    const passwordMatch = await bcrypt.compare(password,hashedPassword)
    return passwordMatch
}

module.exports = {hashPassword,comparePassword};