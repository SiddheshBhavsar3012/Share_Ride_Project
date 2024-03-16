import './App.css';
import Home from './components/home/home.js';
import { Routes,Route } from 'react-router-dom';
import Login from './components/home/Login';
import Register from './components/home/Register';
import { ToastContainer } from 'react-toastify';
import Userhome from './components/user/Userhome';
import OwnerHome from './components/owner/ownerhome';
import VehicleListing from './components/owner/vehiclecrud/VehicleListing';
import VehicleCreate from './components/owner/vehiclecrud/VehicleCreate';
import VehicleEdit from './components/owner/vehiclecrud/VehicleEdit';
import VehicleDetail from './components/owner/vehiclecrud/VehicleDetail';
import AvailableVehicle from './components/user/AvailableVehicles';
import ConfirmRide from './components/user/ConfirmRide';
import RideList from './components/owner/ride/RideList';
import RideEdit from './components/owner/ride/RideEdit';
import RideDetail from './components/owner/ride/RideDetail';
import ContactUs from './components/home/ContactUs';
import AboutUs from './components/home/AboutUs';
import RideCreate from './components/owner/ride/RideCreate';
import ChooseRide from './components/user/ChooseRide';
import AllVehicles from './components/user/AllVehicles';
import OwnerBookings from './components/owner/bookings/OwnerBookings';
import UserBookings from './components/user/bookings/UserBookings';
import OwnerMessage from './components/owner/message/OwnerMsgSend';
import OwnerMsgReceive from './components/owner/message/OwnerMsgReceive';
import AddLocation from './components/owner/AddLocation';
import AddRoute from './components/owner/AddRoute';
import UserMsgSend from './components/user/message/UserMsgSend';
import UserMsgReceive from './components/user/message/UserMsgReceive';
import BookingDetail from './components/owner/bookings/OwnerBookingDetails';
import UserBookingDetail from './components/user/bookings/UserBookingDetails';
import BookRide from './components/user/BookRide';
function App() {
  return (<>
    <div className="App">
    <ToastContainer theme='colored'></ToastContainer>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/contactUs' element={<ContactUs />}></Route>
          <Route path='/aboutUs' element={<AboutUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/user' element={<Userhome/>}></Route>
          <Route path='/owner' element={<OwnerHome/>}></Route>
          <Route path='/owner/vehiclelist' element={<VehicleListing/>}></Route>
          <Route path='/owner/vehicle/create' element={<VehicleCreate/>}></Route>
          <Route path='/owner/vehicle/edit/:vehicleid' element={<VehicleEdit/>}></Route>
          <Route path='/owner/vehicle/detail/:vehicleid' element={<VehicleDetail/>}></Route>
          <Route path='/user/availablevehicle' element={<AvailableVehicle/>}></Route>
          <Route path='/owner/ridelist' element={<RideList/>}></Route>
          <Route path='/owner/ride/edit/:rideid' element={<RideEdit/>}></Route>
          <Route path='/owner/ride/detail/:rideid' element={<RideDetail/>}></Route>
          <Route path='/owner/ride/create' element={<RideCreate/>}></Route>
          <Route path='/owner/bookings' element={<OwnerBookings/>}></Route>
          <Route path='/user/bookings' element={<UserBookings/>}></Route>
          <Route path='/owner/allvehicles' element={<AllVehicles/>}></Route>
          <Route path='/user/chooseride' element={<ChooseRide/>}></Route>
          <Route path='/owner/sendmsg' element={<OwnerMessage/>}></Route>
          {/* <Route path='/owner/recievemsg/:userid' element={<OwnerMsgReceive/>}></Route> */}
          <Route path='/owner/addlocation' element={<AddLocation/>}></Route>
          <Route path='/owner/addroute' element={<AddRoute/>}></Route>
          <Route path='/user/sendmsg' element={<UserMsgSend/>}></Route>
          <Route path='/user/recievemsg/:ownerid' element={<UserMsgReceive/>}></Route>
          <Route path='/owner/bookings/detail/:bookingid' element={<BookingDetail/>}></Route>
          <Route path='/user/bookings/detail/:bookingid' element={<UserBookingDetail/>}></Route>
          <Route path='/user/availablevehicle/confirmride' element={<ConfirmRide/>}></Route>
          <Route path='/user/bookride' element={<BookRide/>}></Route>
          </Routes>
    </div>
    </>
  );
}

export default App;
