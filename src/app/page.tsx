import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/logo.png'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// function Newsletter() {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
//         />
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// }

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Ninana Technologies',
      title: 'Web Developer',
      logo: logoPlanetaria,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

const images = [
  { image: image1, objectPosition: 'object-top' },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5, objectPosition: 'object-top' },
]
const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

const PhotoComponent = ({ image, imageIndex, objectPosition }: any) => {
  return (
    <div
      key={image.src}
      className={clsx(
        'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
        rotations[imageIndex % rotations.length],
      )}
    >
      <Image
        src={image}
        alt=""
        sizes="(min-width: 640px) 18rem, 11rem"
        className={`absolute inset-0 h-full w-full object-cover ${objectPosition}`}
      />
    </div>
  )
}

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((object, imageIndex) => (
          <PhotoComponent
            image={object.image}
            imageIndex={imageIndex}
            objectPosition={object.objectPosition}
            key={imageIndex}
          />
        ))}
      </div>
    </div>
  )
}

const projects: ProjectType[] = [
  {
    id: 1,
    date: 'October, 2022',
    shortName: 'POS system for restaurants',
    type: 'service',
    title: 'Bharpet',
    description:
      'Efficient Point of Sale (POS) system tailored specifically for restaurants, designed to streamline operations and enhance the overall dining experience. With its user-friendly interface, Bharpet empowers restaurant owners and staff to manage orders, track inventory, and process payments seamlessly. The system is equipped with advanced features such as customizable menus, order modifiers, and real-time analytics, allowing establishments to optimize menu offerings and make informed business decisions.',
    technologies: [
      'next.js',
      'express.js',
      'node.js',
      'AWS',
      'MongoDB',
      'Razorpay',
    ],
    links: [],
  },
  {
    id: 2,
    date: 'May, 2020',
    shortName: 'disaster-relief-idea',
    type: 'social welfare',
    title: 'Nivedan',
    description:
      'We all witnessed the mess caused by COVID. A lot of people were not able to ensure even the basic needs of their family. I created an application for people stuck in disasters. Through Nivedan (meaning request) application a user could request aid from people nearby and could see a list of help requests nearby and respond aptly.',

    technologies: ['firebase', 'create-react-app'],
    links: [],
  },
  {
    id: 3,
    shortName: 'county-sports',
    date: 'Nov, 2022',
    type: 'service',
    title: 'County Sports',
    description:
      'County sports is a cricket academy located at North West, Hiranki, Delhi-36 (landmark Bakhtawar pur (Alipur)). Their ground boasts of lush green outfield (75 meters.) and national level playing wickets (proper turfing 8 months). Nets are also available if a team wishes to use our practice facility. For staging Events, Cricket tournaments, Friendly  matches and to avail Nets feel free to contact them.',

    technologies: ['react', 'typescript'],
    links: [],
  },
  {
    id: 4,
    shortName: 'binness',
    date: 'May, 2023',
    type: 'service',
    title: 'Binness',
    description:
      'A web application designed to streamline bill creation for milkmen, vegetable sellers, and other small business owners, providing a user-friendly platform for efficient invoicing.',

    technologies: ['react', 'typescript'],
    links: [],
  },
  {
    id: 5,
    shortName: 'An AR/VR streaming platform',
    date: 'March, 2023',
    type: 'personal',
    title: 'AR streaming platform (under construction)',
    description:
      'A cutting-edge platform dedicated to streaming sports content in augmented reality (AR) and virtual reality (VR), offering an immersive and interactive viewing experience for sports enthusiasts.',

    technologies: ['react', 'typescript', 'YOLO', 'python', 'WebGL', 'open-cv'],
    links: [],
  },

  {
    id: 6,
    shortName: 'Holygrain',
    date: 'February, 2023',
    type: 'service',
    title: 'Holygrain',
    description:
      'Go-to solution for seamless and health-conscious meal planning and delivery. It combines convenience and wellness, offering a diverse array of nutritious meal options tailored to your dietary preferences and fitness goals.',

    technologies: ['next.js', 'express.js', 'node.js', 'AWS', 'MongoDB'],
    links: [],
  },
]

type ProjectType = {
  id: number
  shortName: string
  date: string
  type: string
  title: string
  description: string
  technologies: string[]
  links: string[]
}

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {project.title}
        </h2>
      </div>

      <div className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        {project.date}
      </div>
      <div className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        {project.description}
      </div>
      {/* <div className="mt-4 text-base text-zinc-600 dark:text-zinc-400"> */}
      {/* {project.shortName} */}
      {/* </div> */}
      <div className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        <div className="text-xl font-bold  text-zinc-600 dark:text-zinc-400">
          Type
        </div>
        <div className="text-base text-zinc-600 dark:text-zinc-400 ">
          {project.type}
        </div>
      </div>

      <div className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        <div className="text-xl font-bold">Tech</div>
        {project.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Web developer, cricketer and f1 enthusiast
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Abhijeet, a web developer for Ninana Tech currently in Gujarat.
            I’m a state level cricketer and an ardent F1 fan.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/ARES4004"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/abhijeet-ares/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
