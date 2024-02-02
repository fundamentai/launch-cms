import gql from 'graphql-tag'
import { analysis, mutation as manalsysis } from './analysis'

let typeList = [manalsysis]

export function createCustomMutationResolver({ strapi }) {
    return {
        typeDefs: typeList.join('\n'),

        resolvers: {
            Mutation: {
                analysis: {
                    resolve: analysis
                }
            }
        }
    }
}
