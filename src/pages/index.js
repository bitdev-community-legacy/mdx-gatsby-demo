import React from 'react'
import {MDXProvider} from '@mdx-js/react'

// import styling for markdown
import Header1 from '../components/markdown-styles/Header1'
import Header3 from '../components/markdown-styles/Header3'
import Paragraph from '../components/markdown-styles/Paragraph'
import Link_ from '../components/markdown-styles/Link_'
import CodeBlock from '../components/markdown-styles/CodeBlock'

// import markdown components
import ParagraphDefinition from '../components/content/ParagraphDefinition.md'
import ParagraphDefinitionHTML from '../components/content/ParagraphDefinitionHTML.md'

// assign a custom component to (some) markdown elements
// this object will serve as the props for the 'MDXProvider' that will pass it down through the component tree
const components = {
    h1: Header1,
    h3: Header3,
    p:  Paragraph,
    a: Link_,
    pre: CodeBlock
}

const Page2 = () => {
    return (
        <MDXProvider components={components}>
            <ParagraphDefinition />
            <ParagraphDefinitionHTML />
        </MDXProvider>
    )
}


export default Page2;