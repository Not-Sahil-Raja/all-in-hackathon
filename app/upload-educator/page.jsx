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

export default function uploadEdu() {
  return (
    <main key="1" className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
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
      <section className="mt-12 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Add New Content</h2>
          <Tabs>
            <TabsList>
              <TabsTrigger value="video">Video Lesson</TabsTrigger>
              <TabsTrigger value="text">Text Lesson</TabsTrigger>
              <TabsTrigger value="exercise">Exercise</TabsTrigger>
            </TabsList>
            <TabsContent value="video">
              <form className="grid gap-6">
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
            <TabsContent value="text">
              <form className="grid gap-6">
                <div>
                  <Label htmlFor="text-title">Title</Label>
                  <Input id="text-title" placeholder="Enter title" />
                </div>
                <div>
                  <Label htmlFor="text-content">Content</Label>
                  <Textarea
                    className="min-h-[200px]"
                    id="text-content"
                    placeholder="Enter content"
                  />
                </div>
                <Button className="w-full" type="submit">
                  Add Text Lesson
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="exercise">
              <form className="grid gap-6">
                <div>
                  <Label htmlFor="exercise-title">Title</Label>
                  <Input id="exercise-title" placeholder="Enter title" />
                </div>
                <div>
                  <Label htmlFor="exercise-type">Type</Label>
                  <Select id="exercise-type">
                    <SelectTrigger>
                      <SelectValue placeholder="Select exercise type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mcq">
                        Multiple Choice Question
                      </SelectItem>
                      <SelectItem value="qa">Question and Answer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="exercise-content">Content</Label>
                  <Textarea
                    className="min-h-[200px]"
                    id="exercise-content"
                    placeholder="Enter exercise content"
                  />
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

// === styles.css ===

// body {
//   font-family: var(--font-archivo), sans-serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-libre_franklin), sans-serif;
// }

// === layout.jsx ===

// // This is the root layout component for your Next.js app.
// // Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Libre_Franklin } from 'next/font/google'
// import { Archivo } from 'next/font/google'
// import './styles.css'

// const libre_franklin = Libre_Franklin({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-libre_franklin',
// })
// const archivo = Archivo({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-archivo',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={libre_franklin.variable + archivo.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }
