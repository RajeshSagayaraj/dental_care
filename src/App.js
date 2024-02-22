import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import ApBooking from './Components/ApBooking';
import ContactForm from './Pages/ContactForm';

const App = () => {
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   if (localStorage.getItem('chat-app-user')) {
  //   } else {
  //     setCurrentUser(JSON.parse(localStorage.getItem('chat-app-user')));
  //   }
  // }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <ApBooking />
              <About />
              <Services />
              <Profile />
              <ContactForm/>
              <Contact />
            </>
          }
        />
        {/* <Route
          exact
          path="/dental-clinic/appointment"
          element={<Appointment />}
        />
        <Route exact path="/dental-clinic/treatments" element={} />
        <Route exact path="/ourteam" element={<Profile />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dental-clinic/team" element={<Profile />} />
        <Route exact path="/login_user" element={<Login />} />
        <Route
          exact
          path="/dental-clinic/user/profile"
          element={<UserProfile />}
        />
        <Route
          exact
          path="/dental-clinic/user/chat_section"
          element={<ChatApp />}
        />
        <Route exact path="/dental-clinic/slot" element={<BookingHours />} />
        <Route
          exact
          path="/dental-clinic/admin-person"
          element={<Dashboard />}
        /> */}
      </Routes>
    </>
  );
};

export default App;
