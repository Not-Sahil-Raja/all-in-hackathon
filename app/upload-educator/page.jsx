"use client";
import { Button } from "@/components/ui/button";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function uploadEdu() {
  const { user, error, isLoading } = useUser();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const textLessonHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/educator/new/text", {
        title,
        content,
        postedBy: user,
      });
      console.log(response.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const excerciseHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/educator/new/excercise", {
        title,
        description,
        postedBy: user,
        tags,
        mcqs: {
          question,
          answer,
          options,
        },
      });
      console.log(response.data);
      setTitle("");
      setDescription("");
      setQuestion("");
      setAnswer("");
      setOptions([]);
      setOption("");
      setTags([]);
      setTag("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main
      key="1"
      className="container mx-auto pt-16 py-14 px-4 md:px-6 lg:px-8"
    >
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Manage Educational Content
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Upload and manage your video lessons, text lessons, and exercises.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Video Lessons</h2>
            <Button size="sm">Add Video</Button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-[100px_1fr] items-center gap-4">
              <img
                alt="Video Thumbnail"
                className="rounded-md object-cover"
                height={60}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/60",
                  objectFit: "cover",
                }}
                width={100}
              />
              <div>
                <h3 className="text-lg font-medium">Introduction to Algebra</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A beginner's guide to understanding the fundamentals of
                  algebra.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[100px_1fr] items-center gap-4">
              <img
                alt="Video Thumbnail"
                className="rounded-md object-cover"
                height={60}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/60",
                  objectFit: "cover",
                }}
                width={100}
              />
              <div>
                <h3 className="text-lg font-medium">Fractions and Decimals</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn how to work with fractions and decimals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Text Lessons</h2>
            <Button size="sm">Add Text</Button>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">
                The History of the Solar System
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore the fascinating origins and evolution of our solar
                system.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">
                Introduction to Photosynthesis
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Understand the process of photosynthesis and its importance in
                nature.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Exercises</h2>
            <Button size="sm">Add Exercise</Button>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Algebra Practice Problems</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Test your understanding of algebraic concepts with these
                practice problems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Geometry Worksheet</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Reinforce your knowledge of geometric shapes and formulas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-12 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Video Lessons</h2>
          <Button size="sm">Add Video</Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Video Thumbnail"
              className="mb-4 rounded-md object-cover"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <h3 className="text-lg font-medium">Introduction to Algebra</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A beginner's guide to understanding the fundamentals of algebra.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Video Thumbnail"
              className="mb-4 rounded-md object-cover"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <h3 className="text-lg font-medium">Fractions and Decimals</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Learn how to work with fractions and decimals.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Video Thumbnail"
              className="mb-4 rounded-md object-cover"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <h3 className="text-lg font-medium">The Solar System</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Explore the fascinating origins and evolution of our solar system.
            </p>
          </div>
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <img
              alt="Video Thumbnail"
              className="mb-4 rounded-md object-cover"
              height={200}
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width={300}
            />
            <h3 className="text-lg font-medium">Photosynthesis</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Understand the process of photosynthesis and its importance in
              nature.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-12 rounded-lg border  border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-4 flex flex-col gap-3 items-center justify-between">
          <h2 className="text-xl font-bold">Add New Content</h2>
          <Tabs className=" w-2/3 flex flex-col" defaultValue="text">
            <TabsList className=" ">
              <TabsTrigger value="video">Video Lesson</TabsTrigger>
              <TabsTrigger value="text">Text Lesson</TabsTrigger>
              <TabsTrigger value="exercise">Exercise</TabsTrigger>
            </TabsList>
            <TabsContent value="video" className="px-[20%] ">
              <form className="grid gap-6 mt-5 w-full ">
                <div>
                  <Label htmlFor="video-title">Title</Label>
                  <Input id="video-title" placeholder="Enter title" />
                </div>
                <div>
                  <Label htmlFor="video-description">Description</Label>
                  <Textarea
                    className="min-h-[100px]"
                    id="video-description"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <Label htmlFor="video-file">File</Label>
                  <Input id="video-file" type="file" />
                </div>
                <Button className="w-full" type="submit">
                  Add Video
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="text" className="px-[20%] ">
              <form
                className="grid gap-6 mt-5 w-full "
                onSubmit={textLessonHandler}
              >
                <div>
                  <Label htmlFor="text-title">Title</Label>
                  <Input
                    id="text-title"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="text-content">Content</Label>
                  <Textarea
                    className="min-h-[200px]"
                    id="text-content"
                    placeholder="Enter content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>
                <Button className="w-full" type="submit">
                  Add Text Lesson
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="exercise" className="px-[20%] ">
              <form
                className="grid gap-6 mt-5 w-full "
                onSubmit={excerciseHandler}
              >
                <div>
                  <Label htmlFor="exercise-title">Title</Label>
                  <Input
                    id="exercise-title"
                    placeholder="Enter title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="exercise-Description">Description</Label>
                  <Input
                    className=""
                    id="exercise-Description"
                    placeholder="Add A Short Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <div>
                    <Label htmlFor="Question">Question</Label>
                    <div>
                      <Input
                        id="Questions"
                        type="text"
                        placeholder="Question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="Answer">Answer</Label>
                    <div>
                      <Input
                        id="Answer"
                        type="text"
                        placeholder="Answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      />{" "}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="Options">Options</Label>
                    <div className=" flex gap-3">
                      <Input
                        id="Options"
                        type="text"
                        placeholder="Options"
                        value={option}
                        onChange={(e) => setOption(e.target.value)}
                      />{" "}
                      <Button
                        variant="secondary"
                        className="shadow border"
                        onClick={(e) => {
                          e.preventDefault();
                          setOptions([...options, option]);
                          setOption("");
                        }}
                      >
                        Add Option
                      </Button>
                    </div>
                    <div className=" px-3 font-medium opacity-85">
                      {options.map((option, index) => (
                        <div key={index}>
                          {index + 1} {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="add-tags">Tag</Label>
                  <div className=" flex gap-2">
                    <Input
                      id="add-tags"
                      type="text"
                      placeholder="Add Tags"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                    />{" "}
                    <Button
                      variant="secondary"
                      className="shadow border"
                      onClick={(e) => {
                        e.preventDefault();
                        setTags([...tags, tag]);
                        setTag("");
                      }}
                    >
                      Add Tag
                    </Button>
                  </div>
                  <div className=" px-3 font-medium opacity-85 flex gap-2 mt-2">
                    {tags.map((tag, index) => (
                      <div
                        key={index}
                        className=" bg-slate-100 rounded-md px-2 py-1 border"
                      >
                        #{tag}
                      </div>
                    ))}
                  </div>
                </div>
                <Button className="w-full" type="submit">
                  Add Exercise
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
