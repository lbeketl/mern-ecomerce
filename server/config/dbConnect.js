const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        const connect = mongoose.connect(process.env.MONGO_DB_URL);
        console.log("DB connect successfuly");
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnect;
