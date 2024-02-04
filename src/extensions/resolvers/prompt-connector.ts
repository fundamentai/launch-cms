import { sendMessageToAssistant } from '../../utils/gpt-connector'

export const mutation = `
    type Query {
        promptConnector(content: String!, systemKey: String!): JSON
    }
`

export const promptConnector = async (parent, args, context) => {
    const { content, systemKey } = args

    return await sendMessageToAssistant(systemKey, content)
}
