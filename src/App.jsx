import './App.css' 
import Cards from './components/blog/Cards'
import SideBar from './components/sidebar/SideBar'
import Header from './components/header/Header'
import Modal from './components/modal/modal'
import SortContent from './components/sortFunction/sortContent'


function App() {

  return (
    <>
    <div className='App'>
      <SideBar />
      <div className='layoutContainer'>
          <div className="Headline">
            <Header />
          </div>
              <div className="bodyContainer">
                <h1>My Entries</h1>
                  <div className="blogButtons"> {/*create button container*/}
                    <div className="modalButton">
                      <Modal />
                    </div>
                    <SortContent />
                  </div>
                    <div className="contents"> {/*conntent section container*/}
                      <Cards />
                    </div>
              </div>
        </div>        
      </div>

    </>
  )
}

export default App
