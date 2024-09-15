import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {DateRangePicker} from "@nextui-org/react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { getSubItems, itemMappingsData } from '../../store/itemsSlice';
import { setOrderData } from '../../store/orderSlice';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDeliverySlots } from '../../store/adminSlice';
import { getOrderDates } from '../../store/subscriptionsSlice';
import { id } from 'date-fns/locale';

function Cart() {
    const { selectedItem, selectedSubscription, lastSubDate } = useSelector((state) => state.subscriptions)
    const { deliverySlots } = useSelector((state) => state.admin)
    const [showPopup, setShow] = useState(false);
    const [selected, setSelected] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [plan, setPlan] = useState();
    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { subItems } = useSelector((state) => state.items)
    const [mappings, setMappings] = useState([]);
    const [extraSubItems, setExtraSubItems] = useState([]);
    const [addedExtraSubItems, setAddedExtraSubItems] = useState([]);
    const [deliverySlot, setDeliverySlot] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [extraItemCountData, setExtraItemCountData] = useState({});
    const [isPickFromKitchen, setIsPickFromKitchen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handleClick = (divNum) => () => {
    // //   setSelected(divNum);
    //     console.log(extraSubItems)
    //   let index = extraSubItems.indexOf(divNum)
    //   if(index > -1) {
    //     let eItems = extraSubItems.splice(index, 1);
    //     setExtraSubItems(eItems)
    //   } else {
    //     setExtraSubItems([...extraSubItems, divNum])
    //   }
      
    // };
  const handleClose = async () => {
    setShow(false);
    let extraSubData = []
    let addedExtraitems = []
    console.log("extraSubItems")
    console.log(extraSubItems)
    let extraSubItemsData = Object.keys(extraItemCountData)
    console.log(extraItemCountData)
    if(extraSubItemsData.length) {
        // console.log("hhhh")
        // extraSubItemsData.map((extraSubItem) => {
        let totoalPrice = selectedSubscription ? selectedSubscription.price : selectedItem.price
        let noDays = selectedSubscription ? selectedSubscription.days : 1
        for(let extraSubItem of extraSubItemsData){
            // console.log(extraSubItem)
            let subItemData = subItems.filter((subItem) => {
                return subItem.id == extraSubItem
            })[0]
            if(extraItemCountData[extraSubItem]) {
                console.log("data ", extraItemCountData[extraSubItem], totoalPrice)
                totoalPrice = totoalPrice + (subItemData.price * extraItemCountData[extraSubItem])
                extraSubData.push({itemId: extraSubItem, quantity: extraItemCountData[extraSubItem]})
                // setExtraSubItems([...extraSubItems, {itemId: extraSubItem, quantity: extraItemCountData[extraSubItem]}])
                addedExtraitems.push({subItem: subItemData, quantity: extraItemCountData[extraSubItem]})
            } else {
                totoalPrice = totoalPrice - (subItemData.price * 0)
                // setExtraSubItems([...extraSubItems, {itemId: extraSubItem, quantity: 0}])
            }
        }
        setExtraSubItems(extraSubData)
        setAddedExtraSubItems(addedExtraitems)
        console.log("totoalPrice")
        console.log(totoalPrice)
        setTotalPrice(noDays*totoalPrice*quantity)
        setPrice(totoalPrice*quantity)
    }
    
  } 
  const handleShow = () => setShow(true);
  const active = {backgroundColor: '#2e9a3f',color: '#ffffff'}
  const inactive = {}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const updateQuantity = async(num) => {
    console.log(price)
    let qty = quantity+num;
    setQuantity(qty > 0 ? qty : 0)
    let noDays = selectedSubscription ? selectedSubscription.days : 1
    setTotalPrice(noDays*price*qty)
    setPrice(price*qty)
    
  }

  const updateItemQuantity = async(num, itemId) => {
    // console.log(extraItemCountData)
    let extraItemCount = extraItemCountData
    if(!extraItemCount[itemId]) {
        extraItemCount[itemId] = 0
    }
    extraItemCount[itemId] = (extraItemCount[itemId]+num) > 0 ? (extraItemCount[itemId]+num) : 0;
    // console.log(extraItemCount)
    extraItemCount = JSON.parse(JSON.stringify(extraItemCount))
    setExtraItemCountData(extraItemCount)
  }
  
  useEffect(() => {
    if(selectedSubscription.id) {
        setPrice(selectedSubscription.price)
        setTotalPrice(selectedSubscription.days*selectedSubscription.price)
    } else {
        setPrice(selectedItem.price)
        setTotalPrice(selectedItem.price)
    }
  }, [selectedSubscription])

  const getItemsData = async () => {
    await dispatch(getSubItems())
    let mps = await dispatch(itemMappingsData({itemId: selectedItem.id}))
    console.log("mps", selectedItem.id)
    console.log(mps)
    if(mps.payload) {
        setMappings(mps.payload.data.items)
    }
  }
  const getAdminData = async () => {
    await dispatch(getDeliverySlots())
  }
  
  useEffect(() => {
      getItemsData()
      getAdminData()
  }, [])

  const checkOut = async() => {
    console.log("1")
    console.log("extraSubItems")
    console.log(extraSubItems)
    let orderDetails = {};
    if(selectedPlan  != '' && quantity && deliverySlot) {
        if(selectedSubscription) {
            console.log("2")
            orderDetails = {
                item: selectedItem,
                subscription: selectedSubscription,
                itemId: selectedItem.id,
                extraSubItems: extraSubItems,
                subItems: mappings,
                subscriptionId: selectedSubscription.id,
                quantity,
                totalPrice,
                price,
                startDate,
                selectedPlan,
                deliverySlot,
                isPickFromKitchen
            }
        } else {
            console.log("3")
            orderDetails = {
                item: selectedItem,
                itemId: selectedItem.id,
                extraSubItems: extraSubItems,
                subItems: mappings,
                quantity,
                totalPrice,
                price,
                selectedPlan,
                deliverySlot,
                isPickFromKitchen
            }
        }
        console.log(orderDetails)
        await dispatch(setOrderData(orderDetails))
        navigate('/checkout')
    } else if(!selectedSubscription && quantity && deliverySlot){
        console.log("4")
        orderDetails = {
            item: selectedItem,
            itemId: selectedItem.id,
            extraSubItems: extraSubItems,
            subItems: mappings,
            quantity,
            totalPrice,
            selectedPlan,
            deliverySlot
        }
        await dispatch(setOrderData(orderDetails))
        navigate('/checkout')
    }
    
  }
  const updatePlan = async (num) => {
    let index = selectedPlan.indexOf(num)
    if(index > -1) {
        let sp = selectedPlan.splice(index, 1);
        setSelectedPlan(sp)
      } else {
        setSelectedPlan([...selectedPlan, num])
      }
    console.log(selectedPlan)
  }

  const getLastOrderDate = async () => {
    if(selectedPlan && startDate) {
        let reqObj ={
            noOrders: selectedSubscription.days,
            startDate,
            selectedPlan,
        }
        await dispatch(getOrderDates(reqObj))
    }
  }
  return (
    <div>
        <div className='container p-t-120'>
        <Breadcrumb className='p-t-30'>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
               {/*  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    My account
                </Breadcrumb.Item> */}
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <div className="title-review t-center m-b-2 title_sec">
            <h3 className="tit10 t-center p-l-20 p-r-15 p-t-3">My Meals</h3>
            
        </div>
        <div className="container pb-5 mb-2 p-t-30">
  
        <div className="cart-item ">
                            <div className='d-flex justify-content-between'>
                                
                                    <div className="px-3 my-3">
                                        <a className="cart-item-product d-flex " href="#">
                                            <div className="cart-item-product-thumb"><img src={selectedItem.image} alt="Product" width={100}/></div>
                                            <div className="cart-item-product-info">
                                                <div className="cart-item-product-title">{selectedItem.name} ({selectedSubscription ? selectedSubscription.name : selectedItem.shortName})</div>                                               
                                                <span className='add_extra' onClick={handleShow}><strong>+ Add Extra</strong></span>
                                                {
                                                    (addedExtraSubItems && addedExtraSubItems.length) ?
                                                    <div className='extra_items_block mt-3'>
                                                        <span className='sub_title d-block'><b>Extra items:</b></span>
                                                        {
                                                            addedExtraSubItems.map((addedExtraitem) => {
                                                                return (
                                                                    <span className="d-flex align-items-center extra_item ">
                                                                        <img src={addedExtraitem.subItem.image} width="40" alt=""/>
                                                                        <span>{addedExtraitem.subItem.name}</span>
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                        
                                                        
                                                    
                                                    </div>
                                                    : null
                                                }
                                                
                                            </div>
                                        </a>
                                    </div> 
                                    
                                
                                {
                                    selectedSubscription ?
                                    <div className="px-3 my-3 text-center">
                                        <div className="cart-item-label">Choose your plan</div>
                                        <div className="count-input position-relative">
                                            <span className='position-absolute end-0 top-50 translate-middle d-arrow'><i className="bi bi-chevron-down"></i></span>
                                            <select className="form-control" onChange={(e) => {setPlan(e.target.value); setSelectedPlan(e.target.value); getLastOrderDate()}} style={{height:'38px',minWidth:'100px'}}>
                                                <option value="">Select Plan</option>
                                                <option value={[1,2,3,4,5]}>Mon-Fri</option>
                                                <option value={[1,2,3,4,5,6]}>Mon-Sat</option>
                                                <option value={[]}>Custom</option>
                                            </select>
                                        </div>
                                    
                                    </div>
                                    : null
                                }
                            
                            
                            <div className="px-3 my-3 text-center">
                                <div className="cart-item-label">Quantity</div>
                                <div className="added_count" ><span className="count_minus" onClick={() => updateQuantity(-1)}>-</span><span className="count_total">{quantity}</span><span className="count_plus" onClick={() => updateQuantity(1)}>+</span></div>
                                {/* <div className='extra_items_block d-inline-block mt-3'>
                                    <div className="added_count mt-4" ><span className="count_minus" onClick={() => updateQuantity(-1)}>-</span><span className="count_total">{quantity}</span><span className="count_plus" onClick={() => updateQuantity(1)}>+</span></div>
                                    <div className="added_count mt-4" ><span className="count_minus" onClick={() => updateQuantity(-1)}>-</span><span className="count_total">{quantity}</span><span className="count_plus" onClick={() => updateQuantity(1)}>+</span></div>
                                    <div className="added_count mt-4" ><span className="count_minus" onClick={() => updateQuantity(-1)}>-</span><span className="count_total">{quantity}</span><span className="count_plus" onClick={() => updateQuantity(1)}>+</span></div>
                                    <div className="added_count mt-4" ><span className="count_minus" onClick={() => updateQuantity(-1)}>-</span><span className="count_total">{quantity}</span><span className="count_plus" onClick={() => updateQuantity(1)}>+</span></div>
                                </div> */}
                                {
                                    (addedExtraSubItems && addedExtraSubItems.length) ?
                                    <div className='extra_items_block d-inline-block mt-3'>
                                        {
                                            addedExtraSubItems.map((addedExtraSubItem) => {
                                                return (
                                                    <div className="added_count mt-4" ><span className="count_total">{addedExtraSubItem.quantity}</span></div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    : null
                                }
                            </div>
                            <div className="px-3 my-3 text-center">
                                <div className="cart-item-label">Subtotal</div>
                                <span className="text-xl font-weight-medium sub_total">${price}</span>
                                {
                                    (addedExtraSubItems && addedExtraSubItems.length) ?
                                    <div className='extra_items_block d-inline-block mt-3'>
                                        {
                                            addedExtraSubItems.map((addedExtraSubItem) => {
                                                return (
                                                    <span className="text-xl font-weight-medium sub_total mt-4">${addedExtraSubItem.subItem.price*addedExtraSubItem.quantity}</span>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    : null
                                }
                                
                            </div>
                            </div>
                            <hr></hr>
                            <div className='total_amt_block d-flex justify-content-end mx-3'>
                                <span  className='mx-4'><b>Total:</b></span>
                                <span className='mx-4'>${totalPrice}</span>
                            </div>
                            <div className='d-md-flex'>
                                {
                                    (deliverySlots && deliverySlots.length) ?
                                    <div className="px-3 my-3 text-center">
                                        <div className="cart-item-label">Choose Delivery Slot</div>
                                        <div className="count-input position-relative" style={{minWidth: '200px'}}>
                                            <span className='position-absolute end-0 top-50 translate-middle d-arrow'><i className="bi bi-chevron-down"></i></span>
                                            <select className="form-control" onChange={(e) => {setDeliverySlot(e.target.value);}}>
                                                <option value="">Select Delivery Slot</option>
                                                {
                                                    deliverySlots.map((deliverySlot) => {
                                                        return (<option value={deliverySlot.id}>{deliverySlot.name}</option>)
                                                    })
                                                }
                                                
                                            </select>
                                        </div>
                                    
                                    </div>
                                    : null
                                }
                                {
                                    selectedSubscription ? 
                                    <div className='px-3 my-3 text-center'>
                                        <div className="cart-item-label">Start Date</div>
                                        <div className="count-input position-relative" style={{minWidth: '200px'}}>
                                            <DatePicker selected={startDate} onChange={(date) => {setStartDate(date); getLastOrderDate()}} />
                                        </div>
                                    </div>
                                    : null
                                }
                                {
                                    lastSubDate ? 
                                    <div className='px-3 my-3 text-center'>
                                        <div className="cart-item-label">End Date</div>
                                        <div className="count-input position-relative" style={{padding:'.375rem .75rem'}}>
                                            {lastSubDate}
                                        </div>
                                    </div>
                                    : null
                                }
                                <Form.Group className="px-3 my-3 text-center" controlId="formHorizontalCheck">
                                    <Col sm={12}>
                                        <Form.Check label="Pickup From Kitchen?" checked={isPickFromKitchen} onChange={(e) => setIsPickFromKitchen(e.target.checked)} />
                                    </Col>
                                </Form.Group>
                            </div>
                            
                            
                            {
                                (plan != undefined && plan.length == 0) ? 
                            
                            <div className='custom_dates_wrap text-center'>
                                <span className='d-block'>Days of Week:</span>
                                <div className='custom_dates mb-3'>
                                    <Form> 
                                    {['checkbox'].map((type) => (
                                    <div key={`default-${type}`}  >
                                    <Form.Check
                                            inline
                                            label="Monday"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            onChange={() => updatePlan(1)}
                                        />
                                        <Form.Check
                                            inline
                                            label="Tuesday"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            onChange={() => updatePlan(2)}
                                        />
                                        <Form.Check
                                            inline            
                                            label="Wednessday"
                                            type={type}
                                            id={`inline-${type}-3`}
                                            onChange={() => updatePlan(3)}
                                        />
                                        <Form.Check
                                            inline            
                                            label="Thursday"
                                            type={type}
                                            id={`inline-${type}-3`}
                                            onChange={() => updatePlan(4)}
                                        />
                                        <Form.Check
                                            inline            
                                            label="Friday"
                                            type={type}
                                            id={`inline-${type}-3`}
                                            onChange={() => updatePlan(5)}
                                        />
                                        <Form.Check
                                            inline            
                                            label="Saturday"
                                            type={type}
                                            id={`inline-${type}-3`}
                                            onChange={() => updatePlan(6)}
                                        />
                                        <Form.Check
                                            inline            
                                            label="Sunday"
                                            type={type}
                                            id={`inline-${type}-3`}
                                            onChange={() => updatePlan(7)}
                                        />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                            </div> : null
                            }
                        </div>
    {/* <DateRangePicker 
      label="Stay duration" 
      className="max-w-xs" 
    /> */}
    {/* <div className="d-sm-flex justify-content-between align-items-center text-center text-sm-left px-4">
        <form className="row py-2">
            <div className='col-md-6 px-0'>
                <label className="sr-only">Coupon code</label>
                <input className="form-control form-control-sm my-2 mr-3" type="text" placeholder="Coupon code" required=""/>
            </div>
            <div className='col-md-6 px-0'>
                <button className="btn btn-style-1 btn-secondary btn-sm my-2 mx-auto mx-sm-0" type="submit">Apply Coupon</button>
            </div>
        </form>
        <div className="py-2"><span className="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Subtotal:</span><span className="d-inline-block align-middle text-xl font-weight-medium">${totalPrice}</span></div>
    </div> */}
    <hr className="my-2"/>
    <div className="row pt-3 pb-5 mb-2">
        <div className="col-sm-6 mb-3"></div>
        <div className="col-sm-6 mb-3"><a className="btn2 btn-style-1 btn-primary btn-block" onClick={() => checkOut()}><i className="fe-icon-credit-card"></i>&nbsp;Checkout</a></div>
    </div>
    
       
    </div>
        </div>

        <Modal show={showPopup} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
            <Modal.Title className='m-l-auto'>Add Extra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row className='justify-content-center'>
                <div className='d-flex flex-wrap justify-content-between'>
                {
                    (subItems && subItems.length && mappings && mappings.length) ? 
                        subItems.map((subItem) => {
                            let mps = JSON.parse(mappings[0].subItemIds)
                            if(mps.indexOf(subItem.id.toString()) > -1) {
                                return (
                                    <div className="menu_item d-flex align-items-center justify-content-between">
                                        <span className='d-flex align-items-center'><img src={subItem.image} width="60" alt=""/><span className='d-block'>{subItem.name}</span></span>
                                        <div className="d-flex flex-column flex_ryt"><span className="price mb-2">${subItem.price}</span><div className="added_count"><span className="count_minus" onClick={() => updateItemQuantity(-1, subItem.id)}>-</span><span className="count_total">{extraItemCountData[subItem.id] ? extraItemCountData[subItem.id] : 0}</span><span className="count_plus" onClick={() => updateItemQuantity(1, subItem.id)}>+</span></div></div>
                                    </div>
                                )
                            }
                        })
                    : null
                }
                {/*
                    (subItems.length && mappings.length) ? 
                        subItems.map((subItem) => {
                            let mps = JSON.parse(mappings[0].subItemIds)
                            if(mps.indexOf(subItem.id.toString()) > -1) {
                                return (
                                    <Col xs={6} md={4}>
                                        <div className="menu_item" style={extraSubItems.indexOf(subItem.id) > -1 ? active : inactive} onClick={handleClick(subItem.id)}>
                                            <span><img src={subItem.image} width="40" alt=""/></span><span>{subItem.name}</span>
                                        </div>
                                        
                                    </Col>
                                )
                            }
                            
                        })
                    : null
                */}
                </div>
            </Row>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
            {/* <Button variant="secondary" onClick={handleClose}>
                Close
            </Button> */}
            <Button variant="btn btn2" onClick={handleClose}>
                Add Items
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    
  );
}

export default Cart;
