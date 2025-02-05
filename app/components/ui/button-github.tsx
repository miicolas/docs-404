import Link from 'next/link';
import { SquarePen } from 'lucide-react';

export default function ButtonGithub() {
  return (
    <Link href="https://github.com/miicolas/docs-404" className='flex items-center gap-2 rounded-lg border bg-fd-card p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground col-start-2 text-end w-fit font-medium'>

      <SquarePen className='w-6 h-6' />
      Edit on GitHub
    </Link>
  );
}