/**
 * This file was automatically generated based on your preset configuration.
 *
 * For better type checking and IntelliSense:
 * 1. Install azion as dev dependency:
 *    npm install -D azion
 *
 * 2. Use defineConfig:
 *    import { defineConfig } from 'azion'
 *
 * 3. Replace the configuration with defineConfig:
 *    export default defineConfig({
 *      // Your configuration here
 *    })
 *
 * For more configuration options, visit:
 * https://github.com/aziontech/lib/tree/main/packages/config
 */

export default {
  build: {
    preset: 'astro',
    polyfills: true
  },
  origin: [
    {
      name: 'origin-storage-default',
      type: 'object_storage',
      prefix: ''
    }
  ],
  functions: [
    {
      name: 'handler',
      path: '.edge/worker.js',
      args: {}
    }
  ],
  rules: {
    request: [
      {
        name: 'Set Storage Origin for All Requests',
        description: '',
        active: true,
        criteria: [
          {
            variable: '${uri}',
            operator: 'matches',
            conditional: 'if',
            inputValue: '^\\/'
          }
        ],
        behavior: {
          setOrigin: {
            name: 'origin-storage-default',
            type: 'object_storage'
          }
        }
      },
      {
        name: 'Deliver Static Assets',
        description: '',
        active: true,
        criteria: [
          {
            variable: '${uri}',
            operator: 'matches',
            conditional: 'if',
            inputValue:
              '.(css|js|ttf|woff|woff2|pdf|svg|jpg|jpeg|gif|bmp|png|ico|mp4|json|xml|html)$'
          }
        ],
        behavior: {
          setOrigin: {
            name: 'origin-storage-default',
            type: 'object_storage'
          },
          deliver: true
        }
      },
      {
        name: 'Redirect to index.html',
        description: '',
        active: true,
        criteria: [
          {
            variable: '${uri}',
            operator: 'matches',
            conditional: 'if',
            inputValue: '.*/$'
          }
        ],
        behavior: {
          rewrite: '${uri}index.html'
        }
      },
      {
        name: 'Redirect to index.html for Subpaths',
        description: '',
        active: true,
        criteria: [
          {
            variable: '${uri}',
            operator: 'matches',
            conditional: 'if',
            inputValue: '^(?!.*\\/$)(?![\\s\\S]*\\.[a-zA-Z0-9]+$).*'
          }
        ],
        behavior: {
          rewrite: '${uri}/index.html'
        }
      }
    ],
    response: []
  }
}
