/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/7iVPwxzZFEo
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Chivo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function LearnComp() {
  return (<>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Learn Anywhere, Anytime
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Access a world-class education from the comfort of your home, even with limited internet access.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#">
                Start Learning
              </Link>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/placeholder.svg"
            width="550" />
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div
              className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Solve Problems
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Practice Makes Perfect</h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Dive into a curated collection of practice problems, organized by subject and difficulty level. Hone
              your skills and prepare for success.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <Card>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Math</Badge>
                <Badge variant="secondary">Easy</Badge>
              </div>
              <h3 className="text-xl font-bold">Solve for X</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Practice your algebra skills by solving for the unknown variable.
              </p>
              <Button size="sm" variant="link">
                Start Practice
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Science</Badge>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <h3 className="text-xl font-bold">Identify the Elements</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Test your knowledge of the periodic table by identifying elements from their properties.
              </p>
              <Button size="sm" variant="link">
                Start Practice
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">History</Badge>
                <Badge variant="secondary">Hard</Badge>
              </div>
              <h3 className="text-xl font-bold">Timeline of Events</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Challenge your historical knowledge by placing key events in the correct chronological order.
              </p>
              <Button size="sm" variant="link">
                Start Practice
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div
              className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Learn New Things
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expand Your Knowledge</h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore a diverse library of video lessons and text-based tutorials, covering a wide range of subjects
              to expand your horizons.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <Card>
            <img
              alt="Lesson Thumbnail"
              className="rounded-t-lg object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Introduction to Algebra</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Learn the fundamental concepts of algebra, including variables, equations, and problem-solving
                techniques.
              </p>
              <Button size="sm" variant="link">
                Start Lesson
              </Button>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Lesson Thumbnail"
              className="rounded-t-lg object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">The Solar System</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Explore the planets, moons, and other celestial bodies that make up our solar system.
              </p>
              <Button size="sm" variant="link">
                Start Lesson
              </Button>
            </CardContent>
          </Card>
          <Card>
            <img
              alt="Lesson Thumbnail"
              className="rounded-t-lg object-cover"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300" />
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">The French Revolution</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Dive into the historical events and social changes that shaped the French Revolution.
              </p>
              <Button size="sm" variant="link">
                Start Lesson
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div
              className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Download for Offline
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learn Anytime, Anywhere</h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Access a wealth of educational resources, including notes, workbooks, and practice exams, that you can
              download and use offline, even without a stable internet connection.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <Card>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Math Workbook</h3>
              <p className="text-gray-500 dark:text-gray-400">
                A comprehensive workbook covering essential math concepts, with practice problems and solutions.
              </p>
              <Button size="sm" variant="link">
                Download
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Biology Notes</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Detailed notes on the key topics in biology, perfect for review and exam preparation.
              </p>
              <Button size="sm" variant="link">
                Download
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">Practice Exams</h3>
              <p className="text-gray-500 dark:text-gray-400">
                A collection of practice exams across various subjects to help you assess your readiness.
              </p>
              <Button size="sm" variant="link">
                Download
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </>);
}
