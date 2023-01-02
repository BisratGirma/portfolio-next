import Head from "next/head";
import { Header } from "../components/Header";
import {
  IconBrandGithub as GitHub,
  IconBrandTwitter as Twitter,
  IconBrandLinkedin as LinkedIn,
  IconBrandTelegram as Telegram,
  IconBrandTelegram,
} from "@tabler/icons";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import Projects from "../components/Projects";
import img from "../assets/banner.jpg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const navs = ["Home", "About", "Contact"];
const links = [
  {
    link: "https://github.com/bisratgirma",
    element: <GitHub key={1} />,
  },
  {
    link: "https://twitter.com/bisrat_girma_",
    element: <Twitter key={2} />,
  },
  {
    link: "https://linkedin.com/in/bisrat-girma",
    element: <LinkedIn key={3} />,
  },
  {
    link: "https://t.me/bisratgirma",
    element: <Telegram key={4} />,
  },
];

const linksTwo = [
  {
    link: "https://t.me/bisratgirma",
    icon: "IconBrandTelegram",
  },
];
console.log(linksTwo);

const projectDesc =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const projects = [
  { title: "hey", description: projectDesc, image: img },
  { title: "hello", description: projectDesc, image: img },
  { title: "hello", description: projectDesc, image: img },
  { title: "hello", description: projectDesc, image: img },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header navs={navs} links={links} />
        <Hero />
        <AboutMe />
        <Projects projects={projects} />
        <Contact links={linksTwo} />
        <Footer />
      </main>
    </>
  );
}
