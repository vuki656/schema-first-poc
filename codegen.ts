import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        './src/modules/': {
            plugins: [
                'typescript',
                'typescript-resolvers',
            ],
            preset: 'graphql-modules',
            presetConfig: {
                baseTypesPath: '../generated-types/graphql.ts',
                filename: 'generated-types/module-types.ts',
            },
        },
    },
    schema: './src/resolvers/**/*.graphql',
}

export default config
