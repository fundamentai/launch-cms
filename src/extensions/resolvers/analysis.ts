import gql from 'graphql-tag'

export const mutation = `
    type Mutation {
        analysis(id: ID!, summary: JSON!): JSON
    }
`

export const analysis = async (parent, args, context) => {
    const { id, summary } = args

    const entry = await strapi.entityService.update('api::source.source', id, { data: { summary } })

    return entry
}
