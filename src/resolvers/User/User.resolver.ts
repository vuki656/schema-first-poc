import orm from '../../shared/orm'
import type { UserModule } from './generated'

export const resolvers: UserModule.Resolvers = {
    Mutation: {
        deleteUser: (_, variables) => {
            return orm.user.delete({
                where: {
                    id: variables.input.id,
                }
            })
        },
        updateUser: (_, variables) => {
            return orm.user.update({
                where: {
                    id: variables.input.id,
                },
                data: {
                    lastName: variables.input.lastName,
                    email: variables.input.email,
                    firstName: variables.input.firstName,
                }
            })
        },
        createUser: (_, variables) => {
            return orm.user.create({
                data: {
                    email: variables.input.email,
                    firstName: variables.input.firstName,
                    lastName: variables.input.lastName,
                }
            })
        },
    },
}
