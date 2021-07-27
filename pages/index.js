import Head from 'next/head'

export default function Home() {
  return (
   <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen">
     <nav>
       <div className="container mx-auto font-patrick">
        <div className="flex">
          <div className="w-2/12">
            Epictetus
          </div>
          <div className="w-4/12">
            Nav
          </div>
          <div className="w-6/12">
            btn
          </div>
        </div>
       </div>
     </nav>
   </div>
  )
}
