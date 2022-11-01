import type { Resolvers } from '../../generated-types/graphql'

export const resolvers: Resolvers = {
    Mutation: {
        createUser(a, b, c) {
            b.input.firstName

            return {
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }
        },
    },
}
