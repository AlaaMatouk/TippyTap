import React, { useEffect, useState } from "react";
import { getAllPosts } from "../firebase/post";
import PostCard from "../components/PostCard";
import AddPostBtn from "../components/AddPostBtn";
import Loading from "../components/Loadingskeleton";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen p-4">
      {user && <AddPostBtn />}

      <h1 className="text-center text-2xl font-bold mb-6">All Posts</h1>

      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            imageUrl={post.imageUrl}
            authorName={post.authorName}
          />
        ))
      ) : (
        <div className="min-h-screen flex justify-center align-top">
          <Loading />
        </div>
      )}
    </div>
  );
}
