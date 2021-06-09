import { sourceMdx, processMdx } from '@toastdotdev/mdx'
import { promises as fs } from 'fs'

export const sourceData = async ({ setDataForSlug }) => {
  await sourceMdx({
    setDataForSlug,
    directory: './src/content',
    slugPrefix: '/',
  })
  const coc = await fs.readFile('../../CODE_OF_CONDUCT.md', 'utf-8')

  const result = await processMdx(coc, {
    filepath: 'CODE_OF_CONDUCT.md',
    // namedExports:,
  })
  await setDataForSlug('/code-of-conduct', {
    component: {
      mode: 'source',
      value: result.content,
    },
    data: { meta: { layout: 'centered-prose', title: 'Code of Conduct' } },
  })
  return
}
