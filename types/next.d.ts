import React from 'react'
import { NextPage } from 'next'

declare module 'next' {
  export type NextLayout = ({
    children,
  }: {
    children: React.ReactElement
  }) => React.ReactElement

  export type GetLayout<P = EmptyObject> = (
    page: React.ReactElement,
    props?: P,
  ) => React.ReactElement

  export type NextPageWithLayout<P = EmptyObject, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayout
  }

  export type AppProps<P = EmptyObject> = NextAppProps<P> & {
    Component: NextPageWithLayout
  }
}
