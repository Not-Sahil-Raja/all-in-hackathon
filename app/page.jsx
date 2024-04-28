"use client";

import React from "react";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import { motion, stagger } from "framer-motion";
import Footer from "@/components/Footer";
// variants
const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      ease: "easeInOut",
    },
  },
};
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Home = () => (
  <>
    <div className="flex flex-col min-h-[100dvh] dark:bg-gray-950 dark:text-gray-50">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]"
            >
              <div className="flex flex-col justify-center space-y-4">
                <motion.div variants={headingVariants} className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none dark:text-gray-50">
                    Empowering Education in Africa
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our edtech platform is designed to bring quality education
                    to underserved communities across Africa, with a focus on
                    mobile-first, offline-first, and localized content.
                  </p>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/api/auth/login"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-gray-950 text-gray-50 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
              {/* front_image */}
              <motion.div variants={imageVariants}>
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                  height="550"
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="550"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-gray-50">
                  Designed for Africa
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our edtech platform is built with the unique needs of African
                  learners in mind, with a focus on mobile-first design,
                  offline-first capabilities, and localized content.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Mobile-first Design"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="https://images.unsplash.com/photo-1627423896085-e3e694d88e40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-50">
                        Mobile-first Design
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our platform is optimized for mobile devices, ensuring
                        seamless access to educational content even in areas
                        with limited internet connectivity.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-50">
                        Offline-first Capabilities
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Students can access course materials, assignments, and
                        assessments even without an internet connection,
                        enabling continuous learning.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-50">
                        Localized Content
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our platform offers content in multiple local languages,
                        ensuring that students can learn in their native tongue
                        and stay engaged.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Student Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-gray-50">
                  Hear from Our Students
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our students share their experiences and the impact our
                  platform has had on their educational journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <Card className="dark:bg-gray-800 dark:text-gray-50">
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">
                        Acme Edtech has been a game-changer for me.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {`  Before using this platform, I struggled to access
                        quality educational resources. Now, I can learn at my
                        own pace and even complete assignments offline. It's
                        been life-changing.`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                          className=" object-cover"
                        />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">Amina Bah</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Student, Nigeria
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Card className="dark:bg-gray-800 dark:text-gray-50">
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-lg font-semibold">
                        Acme Edtech has been a game-changer for me.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {`Before using this platform, I struggled to access
                        quality educational resources. Now, I can learn at my
                        own pace and even complete assignments offline. It's
                        been life-changing.`}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                          className=" object-cover"
                        />
                        <AvatarFallback>KM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">Kwame Mensah</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Student, Ghana
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-gray-50">
                  Transforming Education in Africa
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform has been making a significant impact on
                  underdeveloped areas in Africa, partnering with local
                  organizations to bring quality education to underserved
                  communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Impact"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="https://www.unicef.org/sites/default/files/styles/hero_tablet/public/UN0508079.jpg.webp?itok=uAtnsxbA`"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-50">
                        Partnerships
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We collaborate with local organizations and governments
                        to ensure our platform is tailored to the unique needs
                        of each community.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-50">
                        Accessibility
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our platform is designed to be accessible to students in
                        remote and underserved areas, with a focus on
                        mobile-first and offline-first capabilities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold dark:text-gray-50">
                        Localization
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We offer content in multiple local languages, ensuring
                        that students can learn in their native tongue and stay
                        engaged.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
);

export default Home;
