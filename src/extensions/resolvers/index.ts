import gql from 'graphql-tag'
import { analysis, mutation as manalsysis } from './analysis'
import { getFixedTcmb, mutation as gftquery } from './get-fixed-tcmb'

let typeList = [manalsysis, gftquery]

export function createCustomMutationResolver({ strapi }) {
    return {
        typeDefs: typeList.join('\n'),

        resolvers: {
            Query: {
                getFixedTcmb: {
                    resolve: getFixedTcmb
                }
            },

            Mutation: {
                analysis: {
                    resolve: analysis
                }
            }
        }
    }
}
