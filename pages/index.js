import Head from 'next/head'

export default function Home() {
  return (
   <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white font-patrick">
     <nav className="py-10 ">
       <div className="container mx-auto">
        <div className="flex items-center justify-between ">

          <div className="w-2/12 flex items-center">
            <div className="w-10 h-10 bg-gray-500 rounded-md flex items-center justify-center mr-4 shadow-lg">E</div>
            Epictetus
          </div>

          <div className="w-8/12">
            <ul className="flex space-x-10 items-center">
              <li><a href="#">UI design</a></li>
              <li><a href="#">Front end</a></li>
              <li><a href="#">Back end</a></li>
              <li><a>Lainnya</a></li>
            </ul>
          </div>

          <div className="w-2/12 ">
            <input className="bg-gray-700 py-2 px-6 w-full rounded-full" placeholder="Search..."/>
          </div>

        </div>
       </div>
     </nav>
   </div>
  )
}
