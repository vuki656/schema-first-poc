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
                contextType: '../shared/types/CustomContext.type#CustomContextType'
            },
            presetConfig: {
                useGraphQLModules: false,
                baseTypesPath: 'graphql-types.generated.ts',
                filename: 'resolver-types.generated.ts',
            },
        },
    },
    schema: './src/resolvers/**/*.graphql',
}

export default config
