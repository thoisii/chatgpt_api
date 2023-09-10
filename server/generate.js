import openaiClient from "./api.js"

//ai specifications
const generate = async (queryDesc) => {

    //davinci type
    /*
    const daVinci = async (queryDesc) => {
        const responce = openaiClient.completions.create({
            model: "text-davinvi-003",
            prompt: `${queryDesc}.`,
            max_tokens: 100,
            temperature: 0
        })
        return responce.data.choices[0].text
    }
    */

    //chatgpt type
    const chatGPT = async (queryDesc) => {
        const messages = [
            //tell system it's role
            { role: "system", content: `You are my friend`},
            //user input example
            { role: "user", content: `How are you?`},
            //training responce example
            { role: "assistant", content: `Im good! How are you?`},

            //actual user input field
            { role: "user", content: `${queryDesc}.`},
        ];
        const responce = openaiClient.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            max_tokens: 100,
            temperature: 0
        })
        return responce.data.choices[0].message.content
    }

    //toggle ai type
    return await chatGPT(queryDesc)
}

export default generate