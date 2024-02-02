import { sendMessageToAssistant } from '../../utils/gpt-connector'

export const mutation = `
    type Mutation {
        analysis(id: ID!, systemKey: String!): JSON
    }
`

export const analysis = async (parent, args, context) => {
    const { id, systemKey } = args

    const data = (await strapi.entityService.findOne('api::source.source', id)) as any
    console.log(data)
    let summary = await sendMessageToAssistant(systemKey, data.content)

    const entry = await strapi.entityService.update('api::source.source', id, {
        data: {
            summary: JSON.parse(summary)
        }
    })

    return entry
}
