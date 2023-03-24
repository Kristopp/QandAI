import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn, SessionProvider } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "~/server/auth";


export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    console.log("providers", providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  console.log("session", session);
  
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/Qandai/Qandai" } };
  }

  const providers = await getProviders();


  console.log("providers", providers)
  
  return {
    props: { providers: providers ?? [] },
  }
}