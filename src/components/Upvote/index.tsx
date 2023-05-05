import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import upvoteIcon from "/public/icons/upvoteIcon.png";
import { api } from "~/utils/api";


interface Props {
    postId: string;
    userId: string;
}

const Upvote: React.FC<Props> = ({ postId, userId }) => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const upvote = api.postHandler.voteForUserPost.useMutation();

  //Todo: Add a check if user has already voted

  const handleVote = async () => {
    if (!sessionData) {
      router.push('/auth/signin').catch((err: unknown) => console.log(err));
    } else {
      try {
        console.log('FE post id', postId)
        await upvote.mutateAsync({
           postId: 'clgi5c3k300015dqk1sc0a7v3',
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <button
      type="button"
       onClick={handleVote}
        className="flex flex-row items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
    >
        <Icon icon={upvoteIcon} size={'24px'} />
    </button>
    );
};

export default Upvote;