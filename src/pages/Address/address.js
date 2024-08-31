import React, {useState, useEffect, useCallback } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate, useParams } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../Checkout/map'
import { addUserAddress, getUserAddress } from '../../store/usersSlice';
import { getZones } from '../../store/subscriptionsSlice';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const displaystyle = {
    display: 'none', 
};
const fullwidth = {
    width: '100%', 
};
const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
function Address() {
    const { addressId } = useParams()
    const { user } = useSelector((state) => state.auth)
    const { userAddress } = useSelector((state) => state.users)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [mobile, setMobile] = useState(user.mobile)
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [country, setCountry] = useState('')
    const [stateValue, setStateValue] = useState('')
    const [zip, setZip] = useState('')
    const [location, setLocation] = useState()
    const [allowedZipCodes, setAllowedZipCodes] = useState([])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    const getZoneData = async () => {
        let zoneData = await dispatch(getZones())
        if(zoneData.payload.success) {
            console.log("zone data....")
            console.log(zoneData.payload.data.items)
            let resData = zoneData.payload.data.items
            let aZips = []
            if(resData) {
                for(let zone of resData) {
                    aZips.push(zone.name)
                }
            }
            setAllowedZipCodes(aZips)
        }
    }
    useEffect(() => {
        getZoneData()
        window.scrollTo(0, 0)
      }, [])
    const getAddressDataById = async () => {
        let userAddressResp = await dispatch(getUserAddress({id: addressId}))
        if(userAddressResp.payload.success) {
            console.log(userAddressResp.payload.data)
            const userAddr = userAddressResp.payload.data
            setEmail(userAddr.email)
            setMobile(userAddr.mobile)
            setFName(userAddr.fName)
            setLName(userAddr.lName)
            setAddress1(userAddr.address)
            setAddress2(userAddr.address1)
            setCountry(userAddr.country)
            setStateValue(userAddr.state)
            setZip(userAddr.zipcode)
            setLocation({lat: userAddr.latitude, lng: userAddr.longitude})
        }
    }
    useEffect(() => {
        getAddressDataById()
    }, [addressId])
      const saveAddress = async () => {
        console.log("welcome ")
        console.log(location)
        if(!username || !email || !mobile || !fName || !lName || !address1 || !address2 || !country || !stateValue || !zip) {
            alert("Please enter all mandatory data")
            return
        }
        console.log(allowedZipCodes.indexOf(zip))
        console.log(zip)
        if(allowedZipCodes.indexOf(zip) < 0) {
            alert("Sorry!, we are not allowing orders from this zip")
            return
        }
        if(!location) {
            alert("Please select location from map")
            return
        }
        let addressData = {
            userId: user.id,
            email,
            mobile,
            fName,
            lName,
            address: address1,
            address1: address2,
            country,
            state: stateValue,
            zipcode: zip,
            latitude: location.lat,
            longitude: location.lng
        }
        let addressDataRes = await dispatch(addUserAddress(addressData))
        if(addressDataRes.payload.success){
            navigate('/myaccount')
        }
    }
  return (
    <div>
       <div className="container p-t-135"> 
            <div className="row">
                
                <div className="col-md-6 ">
                    <div className="delivery_blcok" id="deliveryBlock">
                        <h4 className="mb-3">Delivery Address</h4>
                        <div className="bg-light p-3 form_block">
                        <form className="needs-validation" novalidate="">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="firstName"><span className='error'>*</span> First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value={fName} onChange={(e) => setFName(e.target.value)} required=""/>
                                        <div className="invalid-feedback"> Valid first name is required. </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName"><span className='error'>*</span> Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value={lName} onChange={(e) => setLName(e.target.value)} required=""/>
                                        <div className="invalid-feedback"> Valid last name is required. </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="username">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" value={username} disabled className="form-control" id="username" placeholder="Username" required=""/>
                                        <div className="invalid-feedback" style={fullwidth}> Your username is required. </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="email"><span className='error'>*</span> Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com"  value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="mobile"><span className='error'>*</span> Mobile </label>
                                    <input type="mobile" className="form-control" id="mobile" placeholder="Enetr your mobile number"  value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <div className="invalid-feedback"> Please enter a valid mobile for shipping updates. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="address"><span className='error'>*</span> Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""  value={address1} onChange={(e) => setAddress1(e.target.value)} />
                                    <div className="invalid-feedback"> Please enter your shipping address. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="address2"><span className='error'>*</span> Address 2 </label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"  value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label for="country"><span className='error'>*</span> Country</label>
                                        <select className="custom-select d-block w-100" id="country" required=""  value={country} onChange={(e) => setCountry(e.target.value)}>
                                            <option value="">Choose...</option>
                                            <option value="United States">United States</option>
                                        </select>
                                        <div className="invalid-feedback"> Please select a valid country. </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="state"><span className='error'>*</span> State</label>
                                        <select className="custom-select d-block w-100" id="state" required=""  value={stateValue} onChange={(e) => setStateValue(e.target.value)}>
                                            <option value="">Choose...</option>
                                            <option value="Texas">Texas</option>
                                        </select>
                                        <div className="invalid-feedback"> Please provide a valid state. </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="zip"><span className='error'>*</span> Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required=""  value={zip} onChange={(e) => setZip(e.target.value)} />
                                        <div className="invalid-feedback"> Zip code required. </div>
                                    </div>
                                </div>
                                <div>
                                    
                                </div>
                                <div ><span className="btn btn2 btn-lg btn-block" onClick={() => saveAddress()}  id="goToPayment">Save Address</span></div>
                                <hr className="mb-4"/>
                                {/* <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address"/>
                                    <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info"/>
                                    <label className="custom-control-label" for="save-info">Save this information for next time</label>
                                </div>  */}
                                
                            </form>
                        </div>
                    </div>
                  
                </div>
                <div className='col-md-6'>
                <div style={{ height: '100vh', width: '100%' }}>
                <Map setLocation={setLocation}></Map>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Address;
