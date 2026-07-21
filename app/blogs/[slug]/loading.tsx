export default function Loading() {
  return (
    <section className="max-w-5xl mx-auto px-5 py-16 animate-pulse">
      <div className="h-10 bg-gray-800 rounded w-3/4 mx-auto mb-6"></div>

      <div className="h-5 bg-gray-800 rounded w-40 mx-auto mb-10"></div>

      <div className="h-[500px] bg-gray-800 rounded-xl mb-10"></div>

      <div className="space-y-4">
        <div className="h-5 bg-gray-800 rounded"></div>
        <div className="h-5 bg-gray-800 rounded"></div>
        <div className="h-5 bg-gray-800 rounded w-5/6"></div>
      </div>
    </section>
  );
}