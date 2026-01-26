import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Enquanto não estiver montado ou o router não estiver pronto,
  // tratamos como não ativo para evitar o "ghosting" de hidratação
  const isCurrentPath = mounted && isReady && (
    asPath === href || (href !== '/' && asPath.startsWith(String(href)))
  );

  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isCurrentPath ? 'text-blue-500' : 'text-gray-100'
      )}
    >
      {children}
    </Link>
  );
};