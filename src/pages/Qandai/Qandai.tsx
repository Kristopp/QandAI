// Create black nextjs page with no layout
import { useState } from "react";
import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect } from "react";

import Banner from "/public/images/Banner.png";
import Image from 'next/image'
import Input from "~/components/Input/Index";
import MessageContainer from "~/components/Content";




const QandAi: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const { data: sessionData } = useSession();
  const router = useRouter();
  //Redirect to signin page if not logged in
  useEffect(() => {
    if (!sessionData) {
      router.push('/auth/signin ').catch((err) => console.log(err));
    }
  }, [sessionData, router]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('value' + value)
    setValue(event.target.value);
  };
  return (
    <>
      {/* Welcome banner */}
      <div className="b-1 b-black w-auto relative" >
        <Image
          src={Banner}
          alt="Picture of the author"
          style={{ objectFit: 'contain' }}
        />

      </div>
      {/* Sign in button */}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      {/* Message content section */}
      <MessageContainer />
      {/* Content section.Needs some brain storming (display questions and score and so on) */}

      {/* input section Needs some brain storming */}
      <Input type={"text"} placeholder={"Ask away"} value={value} onChange={handleChange} />
      {/* Create sign button */}
    </>
  );
};

export default QandAi;