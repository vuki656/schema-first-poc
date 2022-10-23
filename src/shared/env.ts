import dotenv from 'dotenv'
import {
    cleanEnv,
    EnvError,
    EnvMissingError,
    num,
    str,
} from 'envalid'

if (process.env.CI) {
    dotenv.config({ path: '.env.example' })
} else {
    dotenv.config()
}

const env = cleanEnv(process.env, {
    APP_CLIENT_URL: str(),
    APP_JWT_DURATION: num(),
    APP_JWT_SECRET: str(),
    APP_LOG_LEVEL: str(),
    APP_PORT: num(),
    DB_PRISMA_URL: str(),
}, {
    reporter: ({ errors }) => {
        for (const [environmentVariable, error] of Object.entries(errors)) {
            if (error instanceof EnvError) {
                throw new EnvError(`${environmentVariable} EnvError ${error}`)
            } else if (error instanceof EnvMissingError) {
                throw new EnvMissingError(`${environmentVariable} EnvMissingError ${error}`)
            } else {
                throw new TypeError(`${environmentVariable} error ${error}`)
            }
        }
    },
})

export default env
