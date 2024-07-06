import React from "react";
import ReactDOM from "react-dom/client";



/* Header:
*  - Logo
*  - Nav-items
*  - Cart

* Body:
*  - search
*  - Res-container
*       - Restaurant-card
*              -img
*              - Name of res , star rating , cuisine    
* Footer :  
*   - Copyright
*   - Links
*   - Address 
*   - Contact
*
*/


const Header =()=>{
    return(
      <div className="header">

          <div className="logo-container">
            <img className="logoimg" src="https://i.pinimg.com/564x/82/be/d4/82bed479344270067e3d2171379949b3.jpg"/>
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>            
        </div>

      </div>
    )
}

const RestaurantCard=(props)=>{
    const {resData}= props;
    return(
        <div className="res-card">
        <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"/>
        <div className="res-info">
            <h3>{resData.data.name}</h3>
            <p>Rating: 4.5</p>
            <p>Cuisine: Italian</p>
        
        </div>


        </div>
    )
}
const resObj = 
    {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '121603',
        name: 'Kannur Food Point',
        uuid: '51983905-e698-4e31-b0d7-e376eca56320',
        city: '1',
        area: 'Tavarekere',
        totalRatingsString: '10000+ ratings',
        cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
        cuisines: ['Kerala', 'Chinese'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: '24 MINS',
        lastMileTravel: 3,
        slugs: {
          restaurant: 'kannur-food-point-btm',
          city: 'bangalore',
        },
        cityState: '1',
        address:
          '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
        locality: 'SG Palya',
        parentId: 20974,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: '50% off',
          shortDescriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        aggregatedDiscountInfoV2: {
          header: '50% OFF',
          shortDescriptionList: [
            {
              meta: '',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          descriptionList: [
            {
              meta: '50% off on all orders',
              discountType: 'Percentage',
              operationType: 'RESTAURANT',
            },
          ],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        ribbon: [
          {
            type: 'PROMOTED',
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'distance',
              fee: 3700,
              message: '',
            },
            {
              name: 'time',
              fee: 0,
              message: '',
            },
            {
              name: 'special',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3700,
          message: '',
          title: 'Delivery Charge',
          amount: '3700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '3 kms',
        hasSurge: false,
        sla: {
          restaurantId: '121603',
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          longDistance: 'NOT_LONG_DISTANCE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '3.9',
        totalRatings: 10000,
        new: false,
      },
      subtype: 'basic',
    }
    
const Body =()=>{
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res-container">
                <RestaurantCard resData={resObj} />
            </div>
        </div>
    )
}

const AppLayout =()=>{
    
    return(
      
        <div className="app">
             <Header />
             <Body/>
        </div>

      
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

