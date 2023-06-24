const { default: mongoose, model } = require('mongoose');

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        if (connect.connection.readyState === 1) {
            console.log(`DB connection is successfully`);
        } else {
            console.log(`DB connection is failed`);
        }

    } catch (error) {
        console.log(`DB connection is failed`);
        throw new Error(error)
    }
}

module.exports = dbConnect;