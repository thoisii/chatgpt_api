import { OpenAI } from "openai";
import dotenv from "dotenv"
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY

//checks for empty key
if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not set')
    process.exit(1)
}

//create api instance and key-value pair
const openai = new OpenAI({apiKey: openaiApiKey})

export default openai