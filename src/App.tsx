import { useState } from 'react'


// import './App.css'

function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const toggleTheDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }

  return (
    <>
      {/* I made it a light grey */}
      <div className="min-h-screen bg-grey-400">
        {/* this is the start of the header */}
        <header className="bg-white shadow-md">
          <div className="flex items-center">
            <button
              onClick={toggleTheDrawer}
              className="p-2 m-2 rounded md text-gray-700 hover:bg-gray-200 focus:outline-none"
              >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="font-bold text-grey-90">Drawer Demo</h1>
          </div>
        </header>
        {/* this is the end of the header */}
        {/* +++++++++++++++++++++++++++++++++++++++++++++ */}

        {/* +++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* this is the start of the main section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="font-bold">Drawer with React and TailWindCSS</h2>
              <p className="text-gray-800 m-4">
                The drawer for this app will slide from the buttom up. When You click on the handle above.
              </p>
              <p className="text-gray-800 m-4">
                When you click outside, it will not close until you click on the x-shaped handle.
              </p>
            </div>
        </div>
        {/* this is the end of the the main section */}

        {/* this will check for the overlay to know if it should be displayed or not and then blur it. */}
        {drawerIsOpen && (
          <div
            className="fixed inset-0 bg-gray-100 backdrop-blur-sm
             bg-opacity-50 z-20">
          </div>
        )}


        {/* This is the drawer itself */}
        <div
          className={`fixed inset-x-0 bottom-0 transform px-2 mx-2 pb-20 backdrop-blur-sm
            border border-gray/20 bg-opacity-75
            ${drawerIsOpen ? 'translate-y-0' : 'translate-y-full'}
            bg-gray-200 shadow-lg z-30 transition duration-300 ease-in-out
            bg-gradient-to-b from-white to-gray-200/10
            shadow-lg rounded-t-xl max-h-80vh`}>
            <div onClick={toggleTheDrawer} className="p-6">
              {/* the handle of the drawer */}
              <div className="flex justify-center mb-2">
                <div className="w-12 h-1.5 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* items inside the drawer */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 focus:outline-none">Menu</h2>
              <button
                onClick={toggleTheDrawer}
                className="text-gray-700 hover:text-gray-900 focust:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#"
                className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-bold">
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#"
                className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-bold">
                Another Item
              </a>
            </li>
            <li className="mb-2">
              <a href="#"
                className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-bold">
                A Third Item
              </a>
            </li>
            <li className="mb-2">
              <a href="#"
                className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-bold">
                Well More
              </a>
            </li>
            <li className="mb-2">
              <a href="#"
                className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-bold">
                And Even More
              </a>
            </li>
            <li className="mb-2">
              <a href="#"
                className="block p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:font-bold">
                There you go
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    </>
  )
}

export default App
