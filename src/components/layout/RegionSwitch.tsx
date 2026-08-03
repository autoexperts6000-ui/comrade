import { Link } from 'react-router-dom';
import { regions } from '@/data/regions';
import { useRegion } from '@/context/RegionContext';

export function RegionSwitchLink() {
  const region = useRegion();
  const other = region.key === 'dubai' ? regions.india : regions.dubai;

  return (
    <Link
      to={`/${other.key}`}
      className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-blue-400"
    >
      <span aria-hidden>{other.flag}</span>
      View {other.label} site
    </Link>
  );
}

export function RegionSwitchBadge() {
  const region = useRegion();
  const other = region.key === 'dubai' ? regions.india : regions.dubai;

  return (
    <Link
      to={`/${other.key}`}
      className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 transition-colors hover:border-blue-300 hover:text-blue-600"
      aria-label={`Switch to ${other.label} site`}
      title={`Switch to ${other.label} site`}
    >
      <span aria-hidden>{other.flag}</span>
      {other.label}
    </Link>
  );
}
