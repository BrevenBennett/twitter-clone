import BottomBanner from "@/components/BottomBanner";
import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import CommentModal from "@/components/modals/CommentModal";

export default function Home() {
  return (
    <div>
      <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex">
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>
      <CommentModal />
      <BottomBanner />
    </div>
  );
}
