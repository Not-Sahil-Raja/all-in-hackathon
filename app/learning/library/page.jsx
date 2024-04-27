// === component.jsx ===

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/P69WZ4Mft82
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function library() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Our Library
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access a vast collection of educational resources, including
                videos, documents, and more. Find what you need to enhance your
                learning experience.
              </p>
              <form className="flex space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Search resources..."
                  type="search"
                />
                <Button type="submit">Search</Button>
              </form>
            </div>
            <img
              alt="Library"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Resources
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our curated selection of educational resources, covering
                a wide range of topics and formats.
              </p>
            </div>
          </div>
          <Tabs className="mt-8" defaultValue="videos">
            <TabsList className="flex w-full justify-center gap-4 border-b pb-4">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      Introduction to Web Development
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Learn the fundamentals of web development, including HTML,
                      CSS, and JavaScript.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Video
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      Mastering React.js
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Dive deep into the React.js library and learn how to build
                      modern web applications.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Video
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      Data Structures and Algorithms
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Understand the fundamental data structures and algorithms
                      used in computer science.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Video
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      Introduction to Machine Learning
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Explore the fundamentals of machine learning and its
                      applications.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Video
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      The History of Computer Science
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Explore the fascinating history of computer science and
                      its evolution.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Document
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      The Future of Artificial Intelligence
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Dive into the exciting world of AI and its potential
                      applications.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Document
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      The Principles of User Experience Design
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Learn the fundamental principles of creating great user
                      experiences.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Document
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      The Ethics of Data Science
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Explore the ethical considerations in the field of data
                      science.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Document
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="podcasts">
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      The Tech Podcast
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Hear from industry experts on the latest trends and
                      innovations in technology.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Podcast
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                  <img
                    alt="Resource thumbnail"
                    className="rounded-t-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      The AI Podcast
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Dive into the world of artificial intelligence and machine
                      learning.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button size="sm">Download</Button>
                      <Badge className="text-xs" variant="outline">
                        Podcast
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View resource</span>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
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
