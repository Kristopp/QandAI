// Create black nextjs page with no layout
import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Banner from "../../../public/images/Banner.svg";
import Image from 'next/image'

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
      {/* Welcome banner */}
      <div className="b-1 b-black w-auto" >
        <Image
          src={Banner}
          alt="Picture of the author"
          style={{objectFit: 'contain'}}
        />

      </div>
      {/* Content section.Needs some brain storming */}
      {/* input section Needs some brain storming */}
      {/* Create sign button */}
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