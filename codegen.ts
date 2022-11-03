import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        './src/resolvers/': {
            plugins: [
                'typescript',
                'typescript-resolvers',
            ],
            preset: 'graphql-modules',
            config: {
                useIndexSignature: true,
                contextType: './CustomContext.type#CustomContextType'
            },
            presetConfig: {
                useGraphQLModules: false,
                baseTypesPath: '../shared/types/graphql.generated.ts',
                filename: 'graphql.generated.ts',
            },
        },
    },
    schema: './src/resolvers/**/*.graphql',
}

export default config
