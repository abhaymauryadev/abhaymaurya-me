import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black text-neutral-200 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-10">

        {/* Soft error code */}
        <p className="text-xs tracking-widest text-neutral-500 uppercase">
          Error 404
        </p>

        {/* Main message */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-neutral-100">
          This page drifted<br className="hidden sm:block" />
          off the map.
        </h1>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to familiar territory.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-200 border border-neutral-700 px-6 py-3 rounded-full hover:border-neutral-300 transition-colors"
          >
            ← Go back home
          </Link>
        </div>

      </div>
    </section>
  );
}
