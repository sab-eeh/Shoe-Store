import Button from "./Button";

export default function Newsletter() {
  return (
    <section className="container-app mt-24">
      <div className="rounded-3xl border border-border bg-slate-50 p-8 sm:p-12 shadow-soft text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Join Our Newsletter
        </h2>
        <p className="mt-3 text-muted max-w-xl mx-auto">
          Get updates on new arrivals, exclusive offers, and style inspiration.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 rounded-xl border border-border bg-white px-4 py-3 text-sm shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <Button size="lg">Subscribe</Button>
        </form>

        <p className="mt-3 text-xs text-muted">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
