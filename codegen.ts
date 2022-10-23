import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './src/resolvers/**/*.graphql',
    generates: {
        './src/shared/types/graphql.generated.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers'
            ],
        },
    },
}

export default config
