import openaiClient from "./api.js"

//ai specifications
const generate = async (queryDesc) => {
    const responce = openaiClient.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${queryDesc}.`}],
        max_tokens: 100,
        temperature: 0
    })
    return responce.data.choices[0].text
}

export default generate