// Create black nextjs page with no layout
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const QandAi: NextPage = () => {
    const { data: sessionData } = useSession();
    const router = useRouter();
    //Redirect to signin page if not logged in
    console.log('sessionData', sessionData)
    useEffect(() => {
        if (!sessionData) {
          router.push('/auth/signin ');
        }
      }, [sessionData]);
    return (
        <>
        {/* Create signuot button */}
        <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
        <p>QandAi</p>
        </>
    );
};

export default QandAi;