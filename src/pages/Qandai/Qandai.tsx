// Create black nextjs page with no layout
import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Banner from "/public/images/Banner.png";
import Image from 'next/image'
import Input from "~/components/Input/Index";
import Content from "~/components/Content";
import ContentContainer from "~/components/ContentContainer/Index";
import { UserPostWithVoteCount } from "~/server/api/routers/inputRouter";

//mock
import { mockPostData } from '../../../mockData'
import { api } from "~/utils/api";
export interface UserPost {
  id: string
  userId: string
  createdAt: Date
  updatedAt?: Date
  content: string
  voteCount: number
}



const QandAi: NextPage = () => {
  //Use TRPC inputRouters getUser to fetch messages from database
  const { data: allPosts } = api.postHandler.getAllUsersPosts.useQuery();

  console.log(allPosts?.usersAllMessage[0]);

  const { data: sessionData } = useSession();
  const router = useRouter();

  //Create a use effect for loading mock data before rendering to fix hydration error

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (!sessionData) {
      router.push('/auth/signin ').catch((err) => console.log(err));
    }
  }, [sessionData, router]);


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

      {/* Content section.Needs some brain storming (display questions and score and so on) */}
      <ContentContainer>
        {/* I AM USINING MOCK data */}
        {domLoaded && allPosts?.usersAllMessage.map((post: UserPostWithVoteCount) => (

          <Content
            key={post.id}
            userId={post.userId}
            name={post.user.name}
            postId={post.id}
            content={post.content}
            voteCount={post._count.votes}
            createdAt={post.createdAt}

          />
        ))}


      </ContentContainer>


      {/* input section Needs some brain storming */}
      <Input placeholder="Ask away" type="input" />
      {/* Create sign button */}
    </>
  );
};



export default QandAi;