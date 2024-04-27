import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";

export default function learners() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 py-6 px-4 md:px-6 dark:bg-gray-800">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold">John Doe</h1>
              <p className="text-gray-500 dark:text-gray-400">Student</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container mx-auto">
          <Tabs className="w-full" defaultValue="bookmarks">
            <TabsList className="border-b border-gray-200 dark:border-gray-700">
              <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="exercises">Exercises</TabsTrigger>
            </TabsList>
            <TabsContent className="pt-6" value="bookmarks">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <PlayIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Video Lesson</p>
                      </div>
                      <Badge variant="secondary">Bookmarked</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      Introduction to HTML
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Learn the basics of HTML and how to create web pages.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Blog Post</p>
                      </div>
                      <Badge variant="secondary">Bookmarked</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      The Future of Web Development
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Explore the latest trends and technologies in web
                      development.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClipboardIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Exercise</p>
                      </div>
                      <Badge variant="secondary">Bookmarked</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      CSS Grid Layout
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Practice using CSS Grid to create complex layouts.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <PlayIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Video Lesson</p>
                      </div>
                      <Badge variant="secondary">Bookmarked</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      JavaScript Fundamentals
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Dive into the basics of JavaScript and learn how to write
                      interactive web applications.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent className="pt-6" value="posts">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Blog Post</p>
                      </div>
                      <Badge variant="primary">Published</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      My Journey into Web Development
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Sharing my experiences and lessons learned as a beginner
                      web developer.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Blog Post</p>
                      </div>
                      <Badge variant="primary">Published</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      5 Useful CSS Tricks
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Discover some handy CSS techniques to improve your web
                      designs.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Blog Post</p>
                      </div>
                      <Badge variant="primary">Published</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      Responsive Web Design Principles
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Learn how to create websites that adapt to different
                      screen sizes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Blog Post</p>
                      </div>
                      <Badge variant="primary">Published</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      Mastering JavaScript Promises
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Explore the power of asynchronous programming with
                      JavaScript Promises.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent className="pt-6" value="exercises">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClipboardIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Exercise</p>
                      </div>
                      <Badge variant="success">Completed</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">HTML Forms</h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Practice creating and styling HTML forms.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClipboardIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Exercise</p>
                      </div>
                      <Badge variant="success">Completed</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      CSS Flexbox Layout
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Implement a responsive layout using CSS Flexbox.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClipboardIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Exercise</p>
                      </div>
                      <Badge variant="success">Completed</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      JavaScript DOM Manipulation
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Practice using JavaScript to interact with the DOM.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ClipboardIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <p className="text-sm font-medium">Exercise</p>
                      </div>
                      <Badge variant="success">Completed</Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">
                      React Components
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">
                      Build reusable React components.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function FileTextIcon(props) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function PlayIcon(props) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

// === styles.css ===

// body {
//   font-family: var(--font-libre_franklin), sans-serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-libre_franklin), sans-serif;
// }

// === layout.jsx ===

// // This is the root layout component for your Next.js app.
// // Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Libre_Franklin } from 'next/font/google'
// import './styles.css'

// const libre_franklin = Libre_Franklin({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-libre_franklin',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={libre_franklin.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }
