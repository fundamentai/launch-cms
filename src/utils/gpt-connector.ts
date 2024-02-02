import { config } from 'dotenv'
import axios from 'axios'

config()

export const client = axios.create({
    baseURL: process.env.GPT_CONNECTOR + '3213'
})

export async function sendMessageToAssistant(systemKey: string, content: string) {
    var res, data
    try {
        res = await client.post(
            '/openai/continueCompletion',
            {
                message: {
                    content,
                    role: 'user'
                },
                openaiConfig: {
                    max_tokens: 4096
                }
            },
            {
                params: {
                    systemKey
                }
            }
        )

        data = res.data.result.message.content
    } catch (error) {
        try {
            data = error.response.data.error.message
        } catch (error) {
            data = error.message
        }
    }

    return data
}
