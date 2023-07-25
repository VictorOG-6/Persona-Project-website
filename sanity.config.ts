import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas';

const config =  defineConfig({
    
    projectId: 'ldd1qe9e',
    dataset: 'production',
    title: 'Next Sanity Studio',
    apiVersion: '2023-07-15',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas}
  })

export default config