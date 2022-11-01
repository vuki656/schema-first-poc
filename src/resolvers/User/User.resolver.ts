import type { UserModule } from './generated'

export const resolvers: UserModule.Resolvers = {
    Mutation: {
        createUser(parent, context, input) {
            return {
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }
        },
    },
}
