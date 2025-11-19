import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  // Headings with proper spacing
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold mt-10 mb-4 pt-4 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-100">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-200">
      {children}
    </h4>
  ),

  // Lists with proper spacing and bullet styling
  ul: ({ children }) => (
    <ul className="list-disc pl-6 my-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 my-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="mb-1">
      <span className="relative left-1">{children}</span>
    </li>
  ),
} satisfies MDXComponents
 
export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}