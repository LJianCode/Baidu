// import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import '../styles/Home.module.css'
import Router from 'next/router'

export default function Home(props) {
    console.log(props)
    return (
        <div>
            <Header data={props.header} />
            <Main data={props.main} />
            <Footer />
        </div>
    )
}



// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    let navigator = await fetch(`http://localhost:3000/api/navigator`)
    navigator = await navigator.json()
    let news = await fetch(`http://localhost:3000/api/news`)
    news = await news.json()
    let weather = await fetch(`http://localhost:3000/api/weather`)
    weather = await weather.json()
    let hotNews = await fetch(`http://localhost:3000/api/hotNews`)
    hotNews = await hotNews.json()
    let articles = await fetch(`http://localhost:3000/api/article`)
    articles = await articles.json()
    console.log(hotNews)
    // Pass data to the page via props
    return {
        props: {
            header: {
                headerRight: {
                    weather: weather
                }
            },
            main: {
                middleWrapper: {
                    recommend: {
                        rankWrapper: hotNews,
                        news: news,
                        articles: articles,
                    },
                    navigator: navigator
                }

            }
        }
    }
}
// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="main">
//         <h1 className="title">
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className="description">
//           Get started by editing{' '}
//           <code className="code">pages/index.js</code>
//         </p>

//         <div className="grid">
//           <a href="https://nextjs.org/docs" className="card">
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className="card">
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className="card"
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="card"
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className="footer">
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a>
//       </footer>
//     </div>
//   )
// }