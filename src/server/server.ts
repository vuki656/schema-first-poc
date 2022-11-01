import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { userResolver } from '../resolvers/User/User.resolver'
import { LoggerCategoriesEnum } from '../shared/enums'
import env from '../shared/env'
import { logger } from '../shared/logger'
import orm from '../shared/orm'

import { typeDefs } from './typeDefs'

const server = new ApolloServer({
    // @ts-expect-error // TODO: how to type this
    resolvers: [userResolver],
    typeDefs,
})

void startStandaloneServer(
    server, {
        listen: {
            port: env.APP_PORT,
        },
    })
    .then(() => {
        logger.info({
            category: LoggerCategoriesEnum.SERVER,
            message: `🚀 Server ready at: ${env.APP_PORT}/graphql`,
        })
    })
    .catch((error: unknown) => {
        logger.error({
            category: LoggerCategoriesEnum.SERVER,
            error,
        })
    })
    .finally(() => {
        void orm.$disconnect()
    })
