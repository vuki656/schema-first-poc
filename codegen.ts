import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        './src/shared/types/graphql.generated.ts': {
            schema: './src/resolvers/**/*.graphql',
            plugins: [
                'typescript',
                'typescript-resolvers'
            ],
        },
    },
}

export default config
