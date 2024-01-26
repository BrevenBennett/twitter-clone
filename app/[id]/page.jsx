"use client";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { db } from "@/firebase";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useParams } from "next/navigation";
import Moment from "react-moment";

export default async function CommentsPage() {
  async function getData() {
    const params = useParams();
    const id = params.id;
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    const formattedData = {
      username: data.username,
      name: data.name,
      photoUrl: data.photoUrl,
      text: data.tweet,
      comments: data.comments || null,
      timestamp: JSON.stringify(data.timestamp.toDate()),
    };

    return formattedData;
  }

  const tweets = await getData();

  return (
    <div>
      <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex">
        <Sidebar />
        <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow border-gray-700 border-x">
          <div className="flex space-x-2 px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50">
            <Link href={"/"}>
              <ArrowLeftIcon className="w-7 cursor-pointer" />
            </Link>
            <h1>Tweet</h1>
          </div>

          <div className="border-b border-gray-700">
            <div className="flex space-x-3 p-3 border-gray-700">
              <img
                className="w-11 h-11 rounded-full object-cover"
                src={tweets.photoUrl}
              />
              <div>
                <div className="text-gray-500 flex items-center space-x-2 mb-1">
                  <h1 className="text-white font-bold">{tweets.name}</h1>
                  <span>@{tweets.username}</span>
                  <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                  <Moment fromNow>{JSON.parse(tweets.timestamp)}</Moment>
                </div>

                <span className="text-2xl">{tweets.text}</span>
              </div>
            </div>
          </div>

          
        </div>
        <Trending />
      </div>
    </div>
  );
}
