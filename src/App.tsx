import { useState } from 'react'

import { Drawer } from './components/Drawer'
import { MenuItem } from './components/MenuItem'
import { MenuList } from './components/MenuList'
import { DrawerPosition } from './components/Drawer'




// import './App.css'

function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [drawerPosition, setDrawerPosition] = useState<DrawerPosition>('bottom')
  
  // function that will toggle the drawer
  const toggleTheDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen)
  }

  // function that will set the position of the drawer
  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    setDrawerPosition(e.target.value as DrawerPosition);
  }

  return (
    <>
      {/* I made it a light grey */}
      <div className="min-h-screen bg-grey-400">
        {/* this is the start of the header */}
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <div
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
            </div>
            <h1 className="font-bold text-grey-90">Drawer Demo</h1>
          </div>

          {/* position the form to get a dropdown here */}
          <div className="flex justify-end m-2">
            <label htmlFor="position-select" className="mr-2 text-gray-700">
              Drawer Position
            </label>
            <select
              id="position-select"
              value={drawerPosition}
              onChange={handlePositionChange}
              className="p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="bottom">Bottom</option>
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
            </select>
            </div>
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
                Select a position from the dropdown above to see the drawer slide from the top, left or right.
              </p>
              <p className="text-gray-800 m-4">Current Position: <strong>{drawerPosition}</strong></p>
            </div>
        </div>
        {/* this is the end of the the main section */}

        {/* I will use the drawer position to dynamically render the drawer based on what the user selects */}
        <Drawer
          drawerIsOpen={drawerIsOpen}
          onClose={toggleTheDrawer}
          title="Menu"
          position={drawerPosition}
        >
          <MenuList>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Another item</MenuItem>
            <MenuItem>A third item</MenuItem>
            <MenuItem>And Even More</MenuItem>
            <MenuItem>Glory be to God</MenuItem>
          </MenuList>
        </Drawer>
    </div>

    </>
  )
}

export default App
