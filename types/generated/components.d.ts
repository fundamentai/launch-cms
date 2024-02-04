import type { Schema, Attribute } from '@strapi/strapi'

export interface Test2Test extends Schema.Component {
    collectionName: 'components_test2_tests'
    info: {
        displayName: 'test'
        icon: 'question'
    }
    attributes: {
        name: Attribute.String
    }
}

declare module '@strapi/types' {
    export module Shared {
        export interface Components {
            'test2.test': Test2Test
        }
    }
}
