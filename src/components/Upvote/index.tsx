import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ButtonHTMLAttributes } from "react";
import Icon from "../Icon";
import upvoteIcon from "/public/icons/upvoteIcon.png";


interface Props {
    postId: string;
    userId: string;
}

const Upvote: React.FC<Props> = ({ postId, userId }) => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  //Todo create a logic for upvote in the backend

//   const handleUpvote = async (e: ButtonHTMLAttributes<HTMLButtonElement>) => {
//     if (!sessionData) {
//       router.push('/auth/signin').catch((err: unknown) => console.log(err));
//     } else {
//       await upvote({ postId, userId });
//     }
//   };

  return (
    <button
      type="button"
    //   onClick={(e) => handleUpvote(e)}
        className="flex flex-row items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
    >
        <Icon icon={upvoteIcon} size={'24px'} />
    </button>
    );
};

export default Upvote;