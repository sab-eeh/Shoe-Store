import { Link } from "react-router-dom";
import Page from "../components/common/Page";

export default function NotFound() {
  return (
    <Page title="Page Not Found">
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
        <p className="text-muted">The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 font-bold text-white hover:bg-primaryDark transition"
        >
          Go Home
        </Link>
      </div>
    </Page>
  );
}
