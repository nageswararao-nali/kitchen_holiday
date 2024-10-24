import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSubItems, itemMappingsData } from '../../store/itemsSlice';


function MenuItem(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const item = props.item;
  const { subItems } = useSelector((state) => state.items)
  const [mappings, setMappings] = useState([]);

  const getItemsData = async () => {
    await dispatch(getSubItems())
    let mps = await dispatch(itemMappingsData({itemId: props.item.id}))
    console.log("mps", item.id)
    console.log(mps)
    if(mps.payload) {
        setMappings(mps.payload.data.items)
    }
  }
  useEffect(() => {
      getItemsData()
  }, [])

  useEffect(() => {
    if(subItems.length && mappings.length) {
        // console.log(subItems)
        // console.log(mappings)
    }
  }, [subItems, mappings])

  return (
    <div className="col-md-6">
        <div className="veg_menu text-center d-flex ">
            <div className='m-10 img_wrap'>
            <img src={item.image} className="img-fluid" width="150"/>
            <h3 className="how_title m-b-15 text-center m-t-13">
                <span className="m-r-10">
                    {
                        item.isVeg ? <img src="assets/images/veg_icon.png" width="24" alt=""/> : <img src="assets/images/non-veg_icon.png" width="24" alt=""/>
                    }
                    
                </span>
                {item.name}
            </h3>
            </div>
            <div className="menu_items m-10">
            <ul className="d-flex align-items-start">
                {
                    (subItems.length && mappings.length) ? 
                        subItems.map((subItem) => {
                            let mps = JSON.parse(mappings[0].subItemIds)
                            if(mps.indexOf(subItem.id.toString()) > -1) {
                                console.log(subItem.id)
                                return (<li className="d-flex justify-content-center  align-items-center tit11"><span  ><img src={subItem.image} width="60" alt=""/></span><span className="item_title">{subItem.quantity} {subItem.name}</span></li>)
                            }
                            
                        })
                    : null
                }
            </ul>
            </div>
        </div>
    </div>
    
  );
}

export default MenuItem;

