import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { API_URL } from "./contstants";
import { getSession } from "next-auth/react";

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "same-origin",
});


const getRefreshToken = async(refreshToken: string)=> {
  return await fetch(`${API_URL}/api/v1/auth/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: refreshToken,
        }),
  });
}

const authMiddleware = setContext(async (_, { headers }) => {
  const session = await getSession();
console.log(session)
  const accessToken = session?.user?.access_token ?? '';
  const refreshToken = session?.user?.refresh_token ?? '';
  const expiresIn = parseInt(session?.expires ?? '0', 10);

  if (accessToken && session?.expires) {

    const currentTime = Math.floor(Date.now() / 1000);
    if (expiresIn < currentTime) {
     const refreshResponse = await getRefreshToken(refreshToken)

      if (refreshResponse.ok) {
        const { access_token, refresh_token } = await refreshResponse.json();

        await fetch(`/api/auth/session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken: access_token,
            refreshToken: refresh_token,
          }),
        });
        
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${access_token}`,
          },
        };
      }
    }
  }

  return { headers };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
});

export default client;
