import gql from 'graphql-tag'
import { analysis, mutation as manalsysis } from './analysis'
import { getFixedTcmb, mutation as gftquery } from './get-fixed-tcmb'
import { promptConnector, mutation as pcmutation } from './prompt-connector'

let typeList = [manalsysis, gftquery, pcmutation]

export function createCustomMutationResolver({ strapi }) {
    return {
        typeDefs: typeList.join('\n'),

        resolvers: {
            Query: {
                getFixedTcmb: {
                    resolve: getFixedTcmb
                },
                promptConnector: {
                    resolve: promptConnector
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
