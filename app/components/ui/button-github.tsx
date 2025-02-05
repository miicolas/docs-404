import { SquarePen } from 'lucide-react';
import Link from 'next/link';

const GITHUB_PATH = "https://github.com/miicolas/docs-404/blob/main/content/docs/"

export default function ButtonGithub({ href }: { href: string }) {
  return (
    <Link 
      href={GITHUB_PATH + href} 
      className='flex items-center gap-2 rounded-lg border bg-fd-card p-4 text-sm 
        transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground col-start-2 
        text-end w-fit font-medium'
      >

      <SquarePen className='size-6' />
      Edit on GitHub
    </Link>
  );
}
