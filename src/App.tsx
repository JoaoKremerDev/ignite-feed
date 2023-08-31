import Header from './components/Header'
import styles from './App.module.css'
import SideBar from './components/SideBar'
import Post from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03T20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/kaguya.png',
      name: 'Another Author',
      role: 'Frontend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey everyone! 👋' },
      {
        type: 'paragraph',
        content: "I've just launched a new personal website to showcase my recent projects.",
      },
      { type: 'link', content: 'https://example.com/personal-portfolio' },
    ],
    publishedAt: new Date('2023-08-30T10:30:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/erickwendel.png',
      name: 'Third Author',
      role: 'UX Designer',
    },
    content: [
      { type: 'paragraph', content: 'Hello folks! 🌟' },
      {
        type: 'paragraph',
        content: "I've been working on a new user experience case study and wanted to share my process.",
      },
      { type: 'link', content: 'https://example.com/ux-case-study' },
    ],
    publishedAt: new Date('2023-07-15T15:45:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}

              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
