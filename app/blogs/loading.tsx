export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      {/* A skeleton placeholder, not the real page title — a div so it does not
          compete with the actual h1 that renders once the page loads. */}
      <div className="text-5xl font-bold text-center mb-12">Blogs</div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-700 overflow-hidden animate-pulse"
          >
            <div className="h-56 bg-gray-800" />
            <div className="p-5">
              <div className="h-6 bg-gray-800 rounded mb-4" />
              <div className="h-4 bg-gray-800 rounded mb-2" />
              <div className="h-4 bg-gray-800 rounded w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}