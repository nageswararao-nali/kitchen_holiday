import React, {useState, useEffect} from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Map from './map';
import { addUserAddress, getUserAddresses } from "../../store/usersSlice";
import { addOrder } from "../../store/orderSlice";
import { clearData, getZones } from "../../store/subscriptionsSlice";
import Form from 'react-bootstrap/Form';

const displaystyle = {
    display: 'none', 
};
const fullwidth = {
    width: '100%', 
};

function Checkout() {
    const { orderDetails } = useSelector((state) => state.orders)
    const { user } = useSelector((state) => state.auth)
    const { userAddresses } = useSelector((state) => state.users)
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
    const [newAddress, setNewAddress] = useState(false)
    const [addressId, setAddressId] = useState(0)
    const [address, setAddress] = useState()
    const [allowedZipCodes, setAllowedZipCodes] = useState([])
    
    // let allowedZipCodes = []

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getUserAddressesData = async () => {
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
        await dispatch(getUserAddresses({userId: user.id}))
    }
    useEffect(() => {
        getUserAddressesData()
        window.scrollTo(0, 0)
      }, [])

    const goToPayment = async () => {
        console.log("welcome ")
        console.log("orderDetails")
        console.log(orderDetails)
        if(orderDetails.subscription) {
            let orderObj = {
                userId: user.id,
                itemId: orderDetails.item.id,
                itemName: orderDetails.item.name,
                subItems: JSON.parse(orderDetails.subItems[0].subItemIds),
                quantity: orderDetails.quantity,
                addressId: addressId,
                price: orderDetails.price,
                totalAmount: orderDetails.totalPrice,
                customerName: address.fName + " " + address.lName,
                customerMobile: address.mobile,
                address: address.address + ", " + address.address1 + ", " + address.state + ", " + address.zipcode,
                zipcode: address.zipcode,
                startDate: orderDetails.startDate,
                selectedPlan: orderDetails.selectedPlan,
                deliverySlot: orderDetails.deliverySlot,
                status: 'new',
                orderType: 'subscription',
                extraSubItems: orderDetails.extraSubItems,
                noOrders: orderDetails.subscription.days,
                subscriptionId: orderDetails.subscription.id,
                latitude: address.latitude,
                longitude: address.longitude
            }
            console.log("oreder req")
            console.log(orderObj)
            await dispatch(addOrder(orderObj))
            await dispatch(clearData())
        } else {
            let orderObj = {
                userId: user.id,
                itemId: orderDetails.item.id,
                itemName: orderDetails.item.name,
                subItems: JSON.parse(orderDetails.subItems[0].subItemIds),
                quantity: orderDetails.quantity,
                deliverySlot: orderDetails.deliverySlot,
                addressId: addressId,
                totalAmount: orderDetails.totalPrice,
                customerName: address.fName + " " + address.lName,
                customerMobile: address.mobile,
                address: address.address + " " + address.address1 + " " + address.state + " " + address.zipcode,
                zipcode: address.zipcode,
                status: 'new',
                orderType: 'normal',
                extraSubItems: orderDetails.extraSubItems,
                latitude: address.latitude,
                longitude: address.longitude
            }
            console.log("oreder req")
            console.log(orderObj)
            await dispatch(addOrder(orderObj))
        }
        
        navigate('/payment')
    }

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
            setAddressId(addressDataRes.payload.data.id)
            setAddress(addressDataRes.payload.data)
            await getUserAddressesData()
        }
    }
    
  return (
    <div>
        <section className="section-slide banner">
        <div className="row">
            <div className="banner position-relative" >
                <img src="assets/images/banner_bg4.png" className="img-fluid"/>
                <div className="banner_title position-absolute">
                    <span className="tit3">Checkout</span>
                </div>
            </div>
        </div>
    </section>
    <section className="section-welcome p-t-45 p-b-105">  
        <div className="container"> 
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Order Summary</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3 ">
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">{orderDetails.item?.name}</h6>
                                <small className="text-muted">{orderDetails.item?.description}</small>
                            </div>
                            <span className="text-muted">${orderDetails.totalPrice}</span>
                        </li>
                       
                        {/* <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li> */}
                    </ul>
                    {/* <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </div>
                    </form> */}
                </div>
                <div className="col-md-8 order-md-1">
                    <div className="delivery_blcok" id="deliveryBlock">
                        <h4 className="mb-3">Delivery Address</h4>
                        <div className="bg-light p-3 form_block">
                            {
                                userAddresses.length ?
                                <div className="row">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span> Address list </span>
                                        <span className="btn btn2 btn-lg btn-block add_address" onClick={() => setNewAddress(!newAddress)}  id="goToPayment">+ New Address</span>
                                    </div>
                                    {
                                        userAddresses.map((userAddress) => {
                                            return (
                                                <div className="row" onClick={() => {setAddressId(userAddress.id); setAddress(userAddress); setNewAddress(false)}}>
                                                    {/* {userAddress.address} */}
                                                    <div className="container">
                                                        <div className="address_block">
                                                        <Form>
                                                            {['radio'].map((type) => (
                                                                <div key={`inline-${type}`} className="mb-3">
                                                                    <div className="d-flex">
                                                                    <Form.Check
                                                                        inline
                                                                        name="group1"
                                                                        type={type}
                                                                        id={`inline-${type}-1`}
                                                                    />
                                                                    <address>
                                                                    {userAddress.fName + " " + userAddress.lName},<br />
                                                                        {userAddress.address},<br></br> {userAddress.address1}, <br></br>{userAddress.zipcode} </address>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            </Form>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                                : <span className="btn btn2 btn-lg btn-block add_address" onClick={() => setNewAddress(!newAddress)}  id="goToPayment">+ New Address</span>
                            }
                            {
                                newAddress ?
                            <form className="needs-validation" novalidate="">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="firstName"><span className="text-danger">*</span> First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value={fName} onChange={(e) => setFName(e.target.value)} required=""/>
                                        <div className="invalid-feedback"> Valid first name is required. </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName"><span className="text-danger">*</span> Last name</label>
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
                                    <label for="email"><span className="text-danger">*</span> Email </label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com"  value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="mobile"><span className="text-danger">*</span> Mobile </label>
                                    <input type="mobile" className="form-control" id="mobile" placeholder="Enetr your mobile number"  value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <div className="invalid-feedback"> Please enter a valid mobile for shipping updates. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="address"><span className="text-danger">*</span> Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""  value={address1} onChange={(e) => setAddress1(e.target.value)} />
                                    <div className="invalid-feedback"> Please enter your shipping address. </div>
                                </div>
                                <div className="mb-3">
                                    <label for="address2"><span className="text-danger">*</span> Address 2 </label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"  value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label for="country"><span className="text-danger">*</span> Country</label>
                                        <select className="custom-select d-block w-100" id="country" required=""  value={country} onChange={(e) => setCountry(e.target.value)}>
                                            <option value="">Choose...</option>
                                            <option value="United States">United States</option>
                                        </select>
                                        <div className="invalid-feedback"> Please select a valid country. </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label for="state"><span className="text-danger">*</span> State</label>
                                        <select className="custom-select d-block w-100" id="state" required=""  value={stateValue} onChange={(e) => setStateValue(e.target.value)}>
                                            <option value="">Choose...</option>
                                            <option value="Texas">Texas</option>
                                        </select>
                                        <div className="invalid-feedback"> Please provide a valid state. </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="zip"><span className="text-danger">*</span> Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required=""  value={zip} onChange={(e) => setZip(e.target.value)} />
                                        <div className="invalid-feedback"> Zip code required. </div>
                                    </div>
                                </div>
                                <div>
                                    <Map setLocation={setLocation}></Map>
                                </div>
                                <div className="mt-4"><span className="btn btn2 btn-lg btn-block" onClick={() => saveAddress()}  id="goToPayment">Save Address</span></div>
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
                            : null
                            }
                            <hr className="mb-4"/>
                            {
                                addressId ? 
                                <div ><span className="btn btn2 btn-lg btn-block" onClick={() => goToPayment()}  id="goToPayment">Continue to checkout</span></div>
                                : null
                            }
                            
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>     
    </section>
    </div>
    
  );
}

export default Checkout;
