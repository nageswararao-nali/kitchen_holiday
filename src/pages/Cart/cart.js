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
    const [deliverySlot, setDeliverySlot] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [extraItemCountData, setExtraItemCountData] = useState({});
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
    console.log("extraSubItems")
    console.log(extraSubItems)
    let extraSubItemsData = Object.keys(extraItemCountData)
    console.log(extraItemCountData)
    if(extraSubItemsData.length) {
        // console.log("hhhh")
        // extraSubItemsData.map((extraSubItem) => {
        let totoalPrice = selectedSubscription ? selectedSubscription.price : selectedItem.price
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
                
            } else {
                totoalPrice = totoalPrice - (subItemData.price * 0)
                // setExtraSubItems([...extraSubItems, {itemId: extraSubItem, quantity: 0}])
            }
        }
        setExtraSubItems(extraSubData)
        console.log("totoalPrice")
        console.log(totoalPrice)
        setTotalPrice(totoalPrice*quantity)
        setPrice(totoalPrice)
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
    setTotalPrice(price*qty)
    
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
        setTotalPrice(selectedSubscription.price)
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
                startDate,
                selectedPlan,
                deliverySlot
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
                selectedPlan,
                deliverySlot
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
        <div class="container pb-5 mb-2 p-t-30">
  
    <div class="cart-item ">
        <div className='d-md-flex justify-content-between'>
            
                <div class="px-3 my-3">
                    <a class="cart-item-product" href="#">
                        <div class="cart-item-product-thumb"><img src={selectedItem.image} alt="Product"/></div>
                        <div class="cart-item-product-info">
                            <h4 class="cart-item-product-title">{selectedItem.name} ({selectedItem.shortName})</h4>
                            <span className='add_extra' onClick={handleShow}><strong>+ Add Extra</strong></span>
                        </div>
                    </a>
                </div> 
                
             
            {
                selectedSubscription ?
                <div class="px-3 my-3 text-center">
                    <div class="cart-item-label">Choose your plan</div>
                    <div class="count-input position-relative">
                        <span className='position-absolute end-0 top-50 translate-middle d-arrow'><i class="bi bi-chevron-down"></i></span>
                        <select class="form-control" onChange={(e) => {setPlan(e.target.value); setSelectedPlan(e.target.value); getLastOrderDate()}}>
                            <option value="">Select Plan</option>
                            <option value={[1,2,3,4,5]}>Mon-Fri</option>
                            <option value={[1,2,3,4,5,6]}>Mon-Sat</option>
                            <option value={[]}>Custom</option>
                        </select>
                    </div>
                
                </div>
                : null
            }
        
        
        <div class="px-3 my-3 text-center">
            <div class="cart-item-label">Quantity</div>
            <div className="added_count" ><span className="count_minus" onClick={() => updateQuantity(-1)}>-</span><span className="count_total">{quantity}</span><span className="count_plus" onClick={() => updateQuantity(1)}>+</span></div>
        </div>
        <div class="px-3 my-3 text-center">
            <div class="cart-item-label">Subtotal</div><span class="text-xl font-weight-medium">${totalPrice}</span>
        </div>
        </div>
        <div className='d-md-flex'>
            {
                (deliverySlots && deliverySlots.length) ?
                <div class="px-3 my-3 text-center">
                    <div class="cart-item-label">Choose Delivery Slot</div>
                    <div class="count-input position-relative">
                        <span className='position-absolute end-0 top-50 translate-middle d-arrow'><i class="bi bi-chevron-down"></i></span>
                        <select class="form-control" onChange={(e) => {setDeliverySlot(e.target.value);}}>
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
                    <div class="cart-item-label">Start Date</div>
                    <div class="count-input position-relative">
                        <DatePicker selected={startDate} onChange={(date) => {setStartDate(date); getLastOrderDate()}} />
                    </div>
                </div>
                : null
            }
            {
                lastSubDate ? 
                <div className='px-3 my-3 text-center'>
                    <div class="cart-item-label">End Date</div>
                    <div class="count-input position-relative">
                        {lastSubDate}
                    </div>
                </div>
                : null
            }
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
    {/* <div class="d-sm-flex justify-content-between align-items-center text-center text-sm-left px-4">
        <form class="row py-2">
            <div className='col-md-6 px-0'>
                <label class="sr-only">Coupon code</label>
                <input class="form-control form-control-sm my-2 mr-3" type="text" placeholder="Coupon code" required=""/>
            </div>
            <div className='col-md-6 px-0'>
                <button class="btn btn-style-1 btn-secondary btn-sm my-2 mx-auto mx-sm-0" type="submit">Apply Coupon</button>
            </div>
        </form>
        <div class="py-2"><span class="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Subtotal:</span><span class="d-inline-block align-middle text-xl font-weight-medium">${totalPrice}</span></div>
    </div> */}
    <hr class="my-2"/>
    <div class="row pt-3 pb-5 mb-2">
        <div class="col-sm-6 mb-3"></div>
        <div class="col-sm-6 mb-3"><a class="btn2 btn-style-1 btn-primary btn-block" onClick={() => checkOut()}><i class="fe-icon-credit-card"></i>&nbsp;Checkout</a></div>
    </div>
    
       
    </div>
        </div>

        <Modal show={showPopup} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className='m-l-auto'>Add Extra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className='justify-content-center'>
            {
                (subItems.length && mappings.length) ? 
                    subItems.map((subItem) => {
                        let mps = JSON.parse(mappings[0].subItemIds)
                        if(mps.indexOf(subItem.id.toString()) > -1) {
                            return (
                                <div className="menu_item">
                                    <span><img src={subItem.image} width="100" alt=""/></span><span className='d-block'>{subItem.name}</span>
                                    <div class="added_count"><span class="count_minus" onClick={() => updateItemQuantity(-1, subItem.id)}>-</span><span class="count_total">{extraItemCountData[subItem.id] ? extraItemCountData[subItem.id] : 0}</span><span class="count_plus" onClick={() => updateItemQuantity(1, subItem.id)}>+</span></div>
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
