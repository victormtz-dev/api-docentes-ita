import {config} from "dotenv"

config()

export default {
    port: process.env.PORT || 4000,
    db: process.env.MONGODB_URL || "mongodb://localhost/ita"
}