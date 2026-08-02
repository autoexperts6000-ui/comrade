import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center gap-6 bg-[#0B1120] px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Error 404</p>
      <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Page Not Found</h1>
      <p className="max-w-md text-slate-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </section>
  );
}
