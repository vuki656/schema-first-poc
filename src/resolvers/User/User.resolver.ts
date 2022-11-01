import orm from '../../shared/orm'

import type { UserModule } from './generated'

export const resolvers: UserModule.Resolvers = {
    Mutation: {
        createUser: (_, variables) => {
            return orm.user.create({
                data: {
                    email: variables.input.email,
                    firstName: variables.input.firstName,
                    lastName: variables.input.lastName,
                },
            })
        },
        deleteUser: (_, variables) => {
            return orm.user.delete({
                where: {
                    id: variables.input.id,
                },
            })
        },
        updateUser: (_, variables) => {
            return orm.user.update({
                data: {
                    email: variables.input.email,
                    firstName: variables.input.firstName,
                    lastName: variables.input.lastName,
                },
                where: {
                    id: variables.input.id,
                },
            })
        },
    },
    Query: {
        user: (_, variables) => {
            return orm.user.findUnique({
                where: {
                    id: variables.args.id,
                },
            })
        },
        users: (_, variables) => {
            return orm.user.findMany({
                skip: variables.args.skip,
                take: variables.args.take,
            })
        },
    },
}
