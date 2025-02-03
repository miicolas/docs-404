import Link from 'next/link';

export default function Button() {
  return (
    <Link href="https://github.com/miicolas/docs-404" className='flex flex-col gap-2 rounded-lg border bg-fd-card p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground col-start-2 text-end w-fit font-medium'>
      Edit on GitHub
    </Link>
  );
}