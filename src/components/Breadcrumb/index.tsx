// components/Breadcrumb.tsx
import React, { FC } from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  links: { href: string; text: string }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  const lastIndex = links.length - 1;

  return (
    <div className="flex items-center justify-center gap-2 text-white text-lg font-chakrapetch">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {index !== lastIndex ? (
            <>
              <Link href={link.href} className="hover:underline">
                {link.text}
              </Link>
              <span className="text-white/70 mx-1">›</span>
            </>
          ) : (
            <span className="text-white">{link.text}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;