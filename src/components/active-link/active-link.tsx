import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();

  // Verifica se o link é a home (exato) ou se faz parte do caminho atual
  const isCurrentPath = 
    asPath === href || 
    (href !== '/' && asPath.startsWith(String(href)));

  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-500',
        isCurrentPath ? 'text-blue-500' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
};