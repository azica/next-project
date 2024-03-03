"use client"

import type { ReactNode } from "react"

import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "@material-tailwind/react"
import { SessionProvider } from "next-auth/react"

import client from "@/apollo/client"
import { customTheme } from "@/styles/global"

type Props = {
  children: ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>
        <ThemeProvider value={customTheme}>{children}</ThemeProvider>
      </SessionProvider>
    </ApolloProvider>
  )
}
export default Providers
