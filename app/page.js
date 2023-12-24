import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

export default function Experience() {
  return (
    <div>
      <Head>
        <title>Esslam Ashour</title>
        <meta name="description" content='' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className=' bg-gradient-to-tl from-indigo-500 via-slate-900 to-black md:px-20 lg:px-40 max-w-screen'>
        <nav className="text-4xl md:text-5xl lg:text-5xl flex justify-center gap-10 py-3 flex-row md:flex flex-grow pt-10">
            <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/esslam-ashour"><AiOutlineLinkedin className="text-white hover:text-indigo-600 hover:translate-y-1 transition ease-in" /></a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/esslam-ashour"><AiOutlineGithub className="text-white hover:text-indigo-600 hover:translate-y-1 transition ease-in" /></a>
            <a href="mailto:esslamhosam@gmail.com"><AiOutlineMail className="text-white hover:text-indigo-600 hover:translate-y-1 transition ease-in" /></a>
            <Link rel="noopener noreferrer" target="_blank" href="/resume.pdf"><CgFileDocument className="text-white hover:text-indigo-600 hover:translate-y-1 transition ease-in"/></Link>
        </nav>
        <section className="min-h-screen">
          <div className="justify-center p-10">
            <div className="flex flex-row justify-between">
              <h3 className="text-l py-2 text-gray-400 md:text-2xl">Hi, I am</h3>
              <h3 dir="rtl" className="text-l py-2 text-gray-400 md:text-2xl">مرحباً، أنا </h3>
            </div>
            <div className="flex flex-row justify-between">
              <h2 className="text-3xl py-2 md:text-5xl lg:text-6xl font-bold">Esslam</h2>
              <h2 dir='rtl' className="text-3xl py-4 md:text-5xl lg:text-6xl font-bold">إسلام</h2>
            </div>
            <h3 className="text-l py-2 text-gray-300 md:text-xl lg:text-3xl">An aspiring SWE from Egypt</h3>
            <h3 className="text-l py-2 text-gray-300 md:text-xl lg:text-3xl">First-year CS <span className="font-bold">@</span> UChicago</h3>
            <h3 className="text-l py-2 text-gray-300 md:text-xl lg:text-3xl">HPC System Administrator Assistant <span className="font-bold">@</span> UChicago RCC</h3>
          </div>
          <div>
          <div className="justify-end pl-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="border-2 border-indigo-500 bg-opacity-25 flex flex-col bg-white text-indigo-500 px-10 py-10 mr-8 mt-4 mb-4 rounded-xl">
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-3 text-center md:text-left lg:text-left text-white">Projects</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/esslam-ashour/GoQuizCLI"><p className="border-2 border-white transition ease-in hover:bg-indigo-700 hover:translate-y-1 bg-indigo-500 text-white rounded-xl py-2 px-3 text-center">GoQuizCLI<br/><span className='text-sm text-gray-300'>A CLI quiz app</span></p></a>
                <Link href="#"><p className="border-2 border-white transition ease-in hover:bg-indigo-700 hover:translate-y-1 bg-indigo-500 text-white rounded-xl py-2 px-3 text-center">MuhMoney <br/><span className='text-sm text-gray-300'>An expense tracker</span></p></Link>
              </div>
            </div>
            <div className="border-2 border-white bg-opacity-25 flex flex-col bg-indigo-500 text-white px-10 py-10 mr-8 mt-4 mb-4 rounded-xl">
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-3 text-center md:text-left lg:text-left">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
                <p className="border-2 border-indigo-500 bg-white text-indigo-500 rounded-xl py-2 px-3 text-center truncate">Python</p>
                <p className="bg-white text-indigo-500 rounded-xl py-2 px-3 text-center truncate">Go</p>
                <p className="bg-white text-indigo-500 rounded-xl py-2 px-3 text-center truncate">JavaScript</p>
                <p className="bg-white text-indigo-500 rounded-xl py-2 px-3 text-center truncate">SQL</p>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  ); 
}; 