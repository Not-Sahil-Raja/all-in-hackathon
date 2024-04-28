"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import axios, { all } from "axios";
import CommCard from "@/components/commCard/CommCard";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const { user, error, isLoading } = useUser();
  const [postProblem, setpostProblem] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postProblemLoading, setPostProblemLoading] = useState(false);
  const [problems, setProblems] = useState([]);
  const [allTopPost, setAllTopPost] = useState([]);

  const postTheProblem = (e) => {
    e.preventDefault();
    setPostProblemLoading(true);
    axios
      .post("/api/problemPost/new", {
        title,
        description,
        postedBy: user,
      })
      .then((res) => {
        console.log(res);
        setTitle("");
        setDescription("");
        setpostProblem(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPostProblemLoading(false);
      });
  };

  useEffect(() => {
    const topPosts = async () => {
      const res = await axios.get("/api/problemPost/topPosts");
      setAllTopPost(res.data);
    };
    const fetchProblems = async () => {
      const res = await axios.get("/api/problemPost");
      setProblems(res.data);
    };
    fetchProblems();
    topPosts();
  }, [postProblem]);

  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr] bg-gray-100 dark:bg-gray-950 pt-14">
      {postProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold">Post a Problem</h2>
            <form className="mt-4 space-y-4" onSubmit={postTheProblem}>
              <Input
                className="w-full"
                placeholder="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />

              <Textarea
                className="w-full"
                placeholder="Add Description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
              <Button
                className="w-full bg-slate-200"
                type="submit"
                variant={postProblemLoading ? "loading" : "submit"}
              >
                Post Problem
              </Button>
            </form>
            <Button
              className="mt-4 w-full"
              onClick={(prev) => setpostProblem(!prev)}
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      <div className="hidden border-r bg-gray-300/40 dark:bg-gray-800/40 lg:block">
        <div className="flex h-full max-h-[calc(100vh-3.5rem)] flex-col gap-6 p-6">
          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <BookIcon className="h-6 w-6" />
              <span>All Resources</span>
            </Link>
            <Button className="h-8 w-8" size="icon" variant="outline">
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <nav className="flex-1 space-y-4">
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Top Posts
              </h4>
              <div className="grid gap-2">
                {allTopPost.map((post, index) => (
                  <Link
                    className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                    href="#"
                    key={index}
                  >
                    <span>{post.title}</span>
                    <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Top Contributors
              </h4>
              <div className="grid gap-2">
                {allTopPost.map((post, index) => (
                  <Link
                    className="group flex items-center justify-between rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                    href="#"
                    key={index}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          alt="@shadcn"
                          src={post.postedBy.picture}
                        />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>{post.postedBy.name}</span>
                    </div>
                    <ArrowRightIcon className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <div className="">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => setpostProblem(!postProblem)}
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Community</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Ask questions, share resources, and connect with other learners.
              </p>
            </div>
            <div className="grid gap-6">
              {problems.map((problem, index) => (
                <CommCard problem={problem} key={index} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
