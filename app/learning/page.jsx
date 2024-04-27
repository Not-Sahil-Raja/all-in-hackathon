import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const page = () => {
  const ExcerciseData = [
    {
      title: "Solve for X",
      description:
        "Practice your algebra skills by solving for the unknown variable.",
      tags: ["Math", "Easy"],
    },
    {
      title: "Identify the Elements",
      description:
        "Test your knowledge of the periodic table by identifying elements from their properties.",
      tags: ["Science", "Medium"],
    },
    {
      title: "Timeline of Events",
      description:
        "Challenge your historical knowledge by placing key events in the correct chronological order.",
      tags: ["History", "Hard"],
    },
  ];

  const LessonData = [
    {
      title: "Introduction to Algebra",
      description:
        "Learn the fundamental concepts of algebra, including variables, equations, and problem-solving techniques.",
      imgSrc: "/placeholder.svg",
    },
    {
      title: "The Solar System",
      description:
        "Explore the planets, moons, and other celestial bodies that make up our solar system.",
      imgSrc: "/placeholder.svg",
    },
    {
      title: "The French Revolution",
      description:
        "Dive into the historical events and social changes that shaped the French Revolution.",
      imgSrc: "/placeholder.svg",
    },
  ];

  const offlineResources = [
    {
      title: "Math Workbook",
      description:
        "A comprehensive workbook covering essential math concepts, with practice problems and solutions.",
    },
    {
      title: "Biology Notes",
      description:
        "Detailed notes on the key topics in biology, perfect for review and exam preparation.",
    },
    {
      title: "Practice Exams",
      description:
        "A collection of practice exams across various subjects to help you assess your readiness.",
    },
  ];

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 h-screen flex flex-col justify-evenly">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 font-semibold opacity-75">
                Solve Problems
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Practice Makes Perfect
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into a curated collection of practice problems, organized
                by subject and difficulty level. Hone your skills and prepare
                for success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl 2xl:max-w-full grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 select-none">
            {ExcerciseData.map((excercise, index) => (
              <Card key={index} className="2xl:px-5 2xl:py-4">
                <CardContent className="flex flex-col  h-full justify-around gap-3 py-2">
                  <h3 className="text-xl font-bold">{excercise.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {excercise.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {excercise.tags &&
                      excercise.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className=" lg:mx-[20%] hover:border hover:border-gray-500  shadow-inner mt-2 mb-2"
                  >
                    Start Practice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Learn New Things
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Expand Your Knowledge
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore a diverse library of video lessons and text-based
                tutorials, covering a wide range of subjects to expand your
                horizons.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {LessonData.map((lesson, index) => (
              <Card key={index}>
                <img
                  alt="Lesson Thumbnail"
                  className="rounded-t-lg object-cover w-full mb-2"
                  height="200"
                  src={lesson.imgSrc}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <CardContent className="space-y-2 flex flex-col">
                  <div className=" py-1">
                    <h3 className="text-xl font-bold">{lesson.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {lesson.description}
                    </p>
                  </div>
                  <Button size="sm" variant="secondary">
                    Start Lesson
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className=" text-center bg-slate-100 shadow-inner font-semibold w-fit mx-auto px-3 py-2 rounded-lg cursor-pointer">
            Show More
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 h-screen flex flex-col justify-evenly">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Download for Offline
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Learn Anytime, Anywhere
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access a wealth of educational resources, including notes,
                workbooks, and practice exams, that you can download and use
                offline, even without a stable internet connection.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 ">
            {offlineResources.map((resource, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col gap-2 justify-around py-2">
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {resource.description}
                  </p>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="flex gap-2 my-3"
                  >
                    Download <Download size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
