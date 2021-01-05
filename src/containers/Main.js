import { Container } from '@material-ui/core'
import HeaderTop from './header/HeaderTop'
import Home from '../pages/home/Home'

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export default function Main() {
    return (
        <main>
            <HeaderTop />
            <Container maxWidth="lg" style={{background: 'cyan', height: '100vh'}}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </Container>
        </main>
    )
}