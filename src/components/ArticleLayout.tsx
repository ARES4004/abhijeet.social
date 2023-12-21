'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

const projects = [
  {
    id: 1,
    date: 'April 26, 2020',
    shortName: 'disaster-relief-idea',
    type: 'personal',
    title: 'An application for people stuck in disasters',
    description:
      'We all vitnessed the mess caused by COVID. A lot of people were not able to ensure even the basic needs of their family. I created a pair of applications for people stuck in disasters. Through Nivedan (meaning request) application a user could request aid from people nearby. Through the Nirvahan (meaning resolution) application a user could see a list of help requests nearby and respond aptly.',
    targets: [],
    technologies: ['firebase', 'create-react-app'],
    links: [],
    people: [],
  },
  {
    id: 2,
    shortName: 'county-sports',
    date: 'May 24, 2020',
    type: 'service',
    title: 'County Sports',
    description:
      'County sports is a cricket academy located at North West, Hiranki, Delhi-36 (landmark Bakhtawar pur (Alipur)). Their ground boasts of lush green outfield (75 meters.) and national level playing wickets (proper turfing 8 months). Nets are also available if a team wishes to use our practice facility. For staging Events, Cricket tournaments, Friendly  matches and to avail Nets feel free to contact them.',
    targets: [],
    technologies: ['react', 'typescript'],
    links: [],
    people: [],
  },
  {
    id: 3,
    shortName: 'binness',
    date: 'December 24, 2021',
    type: 'service',
    title: 'Binness',
    description:
      'A web application designed to streamline bill creation for milkmen, vegetable sellers, and other small business owners, providing a user-friendly platform for efficient invoicing',
    targets: [],
    technologies: ['react', 'typescript'],
    links: [],
    people: [],
  },
  {
    id: 4,
    shortName: 'An AR/VR streaming platform',
    date: 'March 14, 2023',
    type: 'service',
    title: 'F1',
    description:
      'A cutting-edge platform dedicated to streaming sports content in augmented reality (AR) and virtual reality (VR), offering an immersive and interactive viewing experience for sports enthusiasts.',
    targets: [],
    technologies: ['react', 'typescript', 'YOLO', 'python', 'WebGL', 'open-cv'],
    links: [],
    people: [],
  },
]

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
