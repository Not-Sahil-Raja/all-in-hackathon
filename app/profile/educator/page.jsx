"use client";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

export default function educator() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[300px_1fr]">
      <div className="flex flex-col items-center justify-center gap-6 bg-gray-100 p-6 dark:bg-gray-800 lg:min-h-screen">
        <Avatar className="h-24 w-24">
          <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-bold">Jane Doe</h2>
          <p className="text-gray-500 dark:text-gray-400">Math Teacher</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-4 text-center">
          <div className="space-y-1">
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Videos</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">112</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Posts</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold">78</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Exercises
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 lg:p-10">
        <div>
          <h3 className="text-xl font-bold">About</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Jane Doe is a passionate math teacher with over 10 years of
            experience in the field. She is known for her engaging teaching
            style and innovative approaches to helping students succeed. Jane is
            committed to creating a positive and inclusive learning environment
            for all her students.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Analytics</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
                <CardDescription>
                  Insights into your most recent posts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Videos</CardTitle>
                <CardDescription>
                  Insights into your most recent videos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>
                  Your most popular posts and videos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
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
