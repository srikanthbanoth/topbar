
import About from './components/pages/about/About'
import People from './components/pages/People/People';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

/** Components for Links */

import Mission from './components/pages/about/Mission/Mission'
import Whatwedo from './components/pages/about/Whatwedo/Whatwedo';
import Whoweare from './components/pages/about/Whoweare/Whoweare';
import Howwedo from './components/pages/about/Howwedo/Howwedo';
import Governance from './components/pages/about/Governance/Governance';
import Finance from './components/pages/about/Finance/Finance';
import Contact from './components/pages/about/Contact/Contact';
import Member from './components/pages/People/Members/Member'
import Lifeatftp from './components/pages/People/Lifeatftp/Lifeatftp';
import Communities from './components/pages/People/Communities/Communities';
import Partner from './components/pages/People/Partners/Partner'
import Career from './components/pages/People/Careers/Career';
import Operation from './components/pages/Operations/Operation';
import Events from './components/pages/Operations/Events/Events';
import Gallery from './components/pages/Operations/Gallery/Gallery';
import Projects from './components/pages/Operations/Projects/Projects';
import Contacts from './components/pages/Operations/Contactus/Contacts';

/***
 * Name:Banoth Srikanth
 * Email:bnthsrikanth@gmail.com
 */

function App() {
  return (
    <div className="Topbar">
     
      <BrowserRouter>
        {/* <About /> */}
        {/* <People /> */}
        <Operation />
        <Switch>
            <Route path="/mission" component={Mission} exact/>
            <Route path="/whoweare" component={Whoweare} exact/>
            <Route path="/whatwedo" component={ Whatwedo} exact/>
            <Route path="/howwedo" component={Howwedo} exact/>
            <Route path="/governance" component={Governance} exact/>
            <Route path="/finance" component={Finance} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/member" component={Member} exact/>
            <Route path="/lifeatftp" component={Lifeatftp} exact />
            <Route path="/career" component={Career} exact />
            <Route path="/community" component={Communities} exact />
            <Route path="/partner" component={Partner} exact />
            <Route path="/contacts" component={Contacts} exact />
            <Route path="/events" component={Events} exact />
            <Route path="/gallery" component={Gallery} exact />
            <Route path="/projects" component={Projects} exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
