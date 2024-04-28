"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const CommCard = ({ problem }) => {
  const handleLike = () => {
    axios
      .patch(`/api/problemPost/postLike/${problem._id}`)
      .then((res) => {
        console.log(res);
        setLiked(!liked);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(
    problem.upvotes ? problem.upvotes : 0
  );
  return (
    <Card key={problem._id}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              alt={problem.postedBy.name}
              src={problem.postedBy.picture}
            />
            <AvatarFallback>{problem.postedBy.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">{problem.postedBy.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {problem.postedBy.email}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold">{problem.title}</h3>
        <p className="text-gray-500 dark:text-gray-400">
          {problem.description}
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              className="flex items-center gap-2 "
              variant="text"
              onClick={handleLike}
            >
              <ThumbsUpIcon
                className={`h-5 w-5 ${
                  liked ? "text-blue-500" : "text-gray-500"
                }`}
              />
              <span>
                {likeCount + liked ? problem.upvotes + liked : "Like"}
              </span>
            </Button>
            <Button className="flex items-center gap-2" variant="text">
              <MessageCircleIcon className="h-5 w-5" />
              <span>Comment</span>
            </Button>
            <Button className="flex items-center gap-2" variant="text">
              <ShareIcon className="h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CommCard;

function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function MessageCircleIcon(props) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}
