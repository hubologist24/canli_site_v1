import { useRef } from 'react'
import './App.css'
import { Container, Footer, useMantineTheme, createStyles } from '@mantine/core';

import { Home } from "./Pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { NavBarX } from "./components/organisms/NavBarX"

import { About } from "./Pages/About"
import { Bilgi } from "./Pages/Bilgi"
import { Donate } from "./Pages/Donate"
import { Token } from "./Pages/Token"




//https://www.linkpicture.com/view.php?img=LPic6384a1219711c535723408

function App() {
  const { ethereum } = window as any;
  const theme = useMantineTheme();

  const useStyles = createStyles((theme) => ({


    img: {
      //width: "250px",
      // height: "150px",
      margin: "0 auto",
      display: "block"
    }

  }
  ))

  // className={cx(classes.img)
  const { classes, cx } = useStyles();


  console.log("1")
  console.log(window.location.pathname)

  return (
    <><div className="App">



      <div>

      </div>
      <BrowserRouter>
        <NavBarX />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/token" element={<Token />} />
          <Route path="/bilgi" element={<Bilgi />} />
          <Route path="/about" element={<About />} />
          <Route path="/deneme" element={<div>deneme</div>} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>



      <Footer height={10}>
        <Container>
          <div >
            <img className={cx(classes.img)}
              src="https://i.ibb.co/w60nYLv/mylogo.jpg" alt="mylogo"
            />
          </div>
        </Container>
      </Footer>
    </div></>

  );
}

export default App;
