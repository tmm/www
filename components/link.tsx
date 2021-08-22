import React from 'react'
import NextLink from 'next/link'

type Props = {
  as?: string
  children: React.ReactNode
  className?: string
  external?: boolean
  href: string
  passHref?: boolean
}

export const Link = ({
  as,
  children,
  className,
  external,
  href,
  passHref,
}: Props) => {
  if (external)
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )

  return (
    <NextLink as={as} href={href} passHref={passHref}>
      {passHref ? children : <a className={className}>{children}</a>}
    </NextLink>
  )
}
