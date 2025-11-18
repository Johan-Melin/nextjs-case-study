export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose max-w-none">
        {children}
      </article>
    </div>
  )
}