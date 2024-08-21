import Link from 'next/link';
import NavLinks from './nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full w-full flex-col px-3 py-4 md:px-2 gap-2">
      <Link
        className="h-20 rounded md:border-2 md:border-border p-4 md:h-40 flex felx-row md:flex-col items-center justify-center gap-1 md:gap-0"
        href="/dashboard">
        <h1 className="text-lg font-bold">MAX</h1>
        <h1 className="text-lg font-bold">ML-Portfolio</h1>
      </Link>

      <div className="md:h-full flex flex-row md:flex-col grow gap-2">
        <div className="h-auto w-full flex flex-row md:flex-col gap-2">
          <NavLinks />
        </div>

        <div className="hidden h-auto w-full grow rounded border-2 border-border md:block"></div>

        <Link className="h-[48px] border-2 border-border rounded p-3 flex flex-row gap-3 hover:bg-secondary hover:text-amber-400 cursor-pointer" href="/">
          <PowerIcon className="w-6" />
          <p className="hidden md:block">Sign Out</p>
        </Link>
      </div>
    </div>
  );
}
