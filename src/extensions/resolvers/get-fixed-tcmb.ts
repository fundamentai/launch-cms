import { sendMessageToAssistant } from '../../utils/gpt-connector'

export const mutation = `
    type Query {
        getFixedTcmb(length: Int!): JSON
    }
`

export const getFixedTcmb = async (parent, args, context) => {
    const { length } = args

    return await strapi.entityService.findMany('api::tcmb.tcmb', {
        limit: length
    })
}
