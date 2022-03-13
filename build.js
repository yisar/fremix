const esbuild = require('esbuild');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const shouldWatch = process.env.WATCH === 'true'

const buildServer = () => {
    esbuild.build({
        entryPoints: ['./server.js'],
        platform: 'node',
        outdir: 'build',
        external: [
            ...Object.keys(pkg.dependencies),
            ...Object.keys(pkg.devDependencies),
        ],
        inject: ['./src/react-shim.js'],
        bundle: true,
        watch: shouldWatch,
        publicPath: '/build',
        plugins: [],
        define: {
            'process.env.NODE_ENV': isProd ? "'production'" : "'development'",
        },
        metafile: true,
        sourcemap: true,
    })
}

const buildClient = () => {
    esbuild.build({
        entryPoints: ['./demo/entry-client.js'],
        platform: 'node',
        outdir: 'public/build',
        format: 'esm',
        loader: { '.js': 'jsx' },
        splitting: true,
        inject: ['./src/react-shim.js'],
        bundle: true,
        watch: shouldWatch,
        publicPath: '/build',
        plugins: [],
        define: {
            'process.env.NODE_ENV': isProd ? "'production'" : "'development'",
        },
        metafile: true,
        sourcemap: true,
    })
}

async function build() {
    await Promise.all([buildServer(), buildClient()]);
}

build()