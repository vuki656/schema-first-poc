import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        // './src/resolvers/': {
        //     plugins: [
        //         'typescript',
        //         'typescript-resolvers',
        //     ],
        //     preset: 'graphql-modules',
        //     presetConfig: {
        //         useGraphQLModules: false,
        //         baseTypesPath: '../../shared/types/graphql.generated.ts',
        //         filename: 'generated.ts',
        //     },
        // },
        './src/shared/types/graphql.generated.ts': {
            plugins: [
                'typescript',
                'typescript-resolvers',
            ],
            config: {
                useIndexSignature: true,
                contextType: './CustomContext.type#CustomContextType'
            },
            schema: './src/resolvers/**/*.graphql',
        },
    },
    schema: './src/resolvers/**/*.graphql',
}

export default config
