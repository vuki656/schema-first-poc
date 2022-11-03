import orm from '../../shared/orm'
import { Resolvers } from '../../shared/types/graphql.generated'

import type { UserModule } from './generated'

export const userResolver: Resolvers = {
    Mutation: {
        createUser: (_, variables, context) => {
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
