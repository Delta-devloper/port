import React from 'react'
import "./Home.css"
import Interier from "./Imgs/Group 2.png"
import Basket  from "./Imgs/Group 119.png"
import Cen21 from "./Imgs/image-asset-removebg-preview 1.png"
import Cen22 from "./Imgs/desk-lamp-marble-table 1.png"
import Cen23 from "./Imgs/picture-frame-by-velvet-armchair-removebg-preview 1 (1).png"
import crd1 from "./Imgs/images__20_-removebg-preview 1.png"
import crd2 from "./Imgs/GUEST_7d88546c-eb7a-47ae-ae7e-7d30a56a8051-removebg-preview 1.png"
import crd3 from "./Imgs/images__21_-removebg-preview 1.png"
import crd4 from "./Imgs/shop-15-removebg-preview 1.png"
import crd5 from "./Imgs/images__24_-removebg-preview 1.png"
import crd6 from "./Imgs/images__22_-removebg-preview 1.png"
import crd7 from "./Imgs/1655320691_Emily_Dining_Chair_Light_Grey_PU_Chrome_front_three_quarter-removebg-preview 1.png"
import odm from "./Imgs/Mask group (1).png"
import odm1 from "./Imgs/Mask group (2).png"
import odm2 from "./Imgs/Mask group (3).png"
import odm3 from "./Imgs/Mask group (4).png"
import line from "./Imgs/Group 98.png"
import tpcard from "./Imgs/living-room-interior-have-cabinet-tv-leather-armchair-white-room-3d-rendering 1.png"
import tpcard1 from "./Imgs/empty-living-room-with-blue-sofa-plants-table-empty-white-wall-background-3d-rendering 1.png"
import tpcard2 from "./Imgs/green-sofa-modern-apartment-interior-with-empty-wall-wooden-table-3d-rendering 1.png"
import ft from "./Imgs/Group 2 (1).png"


import crd8 from "./Imgs/CNN051626363DNA-removebg-preview 1.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import CachedIcon from '@mui/icons-material/Cached';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Home() {
  return (
    <div className='Home'>
        <div className="Navbar">
            <img src={Interier} alt="" />
            <div className="a_links_nav">
              <a href="">Home</a>
              <a href="">Pages</a>
              <a href="">Services</a> 
              <a href="">Project</a> 
              <a href="">Blog</a> 
              <a href="">Cotact Us</a> 
            </div>
            <img src={Basket} alt="" />
        </div>
        <section className='section_1'>
            <div className="center-1">
              <p>INTERIOR</p>
              <p className='cen-1-2'>Home Deasigns <br /> Made Easy</p>
              <p className='cen-1-3'>$416.00 Starting</p>
              <button className='cen-btn'>SHOP NOW</button>
            </div>
        </section>
        <section className='section_2'>
           <div className="center-2">
             <div className="cen-card-1">
              <p className='cen-2-1'>New Chair <br /> Collection 2022</p>
              <button className='cen-2-btn'>Shop Now</button><br /><br />
              <img src={Cen21} alt="" />
             </div>
             <div className="cen-card-1">
              <p className='cen-2-1'>Lamp Desk</p><br /><br />
              <button className='cen-2-btn'>Shop Now</button><br />
              <img src={Cen22} alt="" />
             </div> <div className="cen-card-1">
              <p className='cen-2-1'>Modern Chair <br /> Collection 2022</p>
              <button className='cen-2-btn'>Shop Now</button><br /><br />
              <img src={Cen23} alt="" />
             </div>
           </div>
        </section>
        <section className='section_3'>
        <div className="secnv">
           <div className="sec_nav">
             <div className="sec_nav-1">
               <p>---- PROFESSIONAL TEAM</p>
               <p className='scnvp-1'>The Best New Arrivals</p>

             </div>

             
             <div className="sec_nav-2">
               <p>Desk</p>
               <p>Bedroom</p>
               <p>Lighting</p>
               <p>Acessories</p>
             </div>
             
           </div>
           </div><br /><br />
            <div className="cen-cards">
                <div className="cen-cardd">
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd1} alt="" />
                        
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>

                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd2} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd3} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd3} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd4} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1" >
                      <div className="cenimgdv">
                        <img src={crd5} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1" >
                      <div className="cenimgdv">
                        <img src={crd5} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd6} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd7} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd8} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    
                    
                </div>
            </div>
        </section><br /><br />
        <section className='section_4'>
            <div className="center-4">
            <p className='f'>--- WHAT PEOPLE SAY ---</p>
            <p className='ff'>Words Of Our Clients</p>
            <div className="cen4-crds">
            <div className="cen-4-crd-1">
              <img src={odm} alt="" />
              <p>Bessie Cooper</p>
              <p className='cen-p'>Communications Director</p>
              <p ><StarHalfIcon style={{color: "yellow"}}/> 4.0 </p>
              <p className='cen-p'>I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</p>
            </div>
            <div className="cen-4-crd-1">
              <img src={odm1} alt="" />
              <p>Angenila Jolie</p>
              <p className='cen-p'>Sales Manager</p>
              <p ><StarHalfIcon style={{color: "yellow"}}/> 4.0 </p>
              <p className='cen-p'>I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</p>
            </div>
            <div className="cen-4-crd-1">
              <img src={odm2} alt="" />
              <p>Brooklyn Simmons</p>
              <p className='cen-p'>Public Realations Specialist</p>
              <p ><StarHalfIcon style={{color: "yellow"}}/> 4.0 </p>
              <p className='cen-p'>I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</p>
            </div>
            <div className="cen-4-crd-1">
              <img src={odm3} alt="" />
              <p>Bessie Cooper</p>
              <p className='cen-p'>Communications Director</p>
              <p ><StarHalfIcon style={{color: "yellow"}}/> 4.0 </p>
              <p className='cen-p'>I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi</p>
            </div>
            
            </div>
            </div>
        </section>
        <section className='section_5'>
        <div className="secnv">
           <div className="sec_nav">
             <div className="sec_nav-1">
               <p>---- PROFESSIONAL TEAM</p>
               <p className='scnvp-1'>The Best New Arrivals</p>

             </div> 
             <button className='cen-2-btnn'>Shop Now</button>

           </div>
           </div><br /><br />
            <div className="cen-carrds">
                <div className="cen-carddd">
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd1} alt="" />
                        
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>

                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd2} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd3} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                    <div className="cencrd-1">
                      <div className="cenimgdv">
                        <img src={crd4} alt="" />
                                      
                      </div>
                      <div className="blck">
                          <CachedIcon style={{color:"white"}}/>
                          <FavoriteIcon style={{color:"white"}}/>
                          <ShoppingCartIcon style={{color:"white"}}/>
                      </div>
                      
                    </div>
                   
                    
                    
                    
                </div>
                
            </div>

        </section>
          <div className="black-1">
              <div className="black-1-1">
                  <img src={line} alt="" />
              </div>
          </div>
          <section className='section-6'>
            <div className="top">
              <p>--- RECENT ARTICLES ---</p>
              <p>Read Our Latest Articles</p>
            </div>
            <div className="top-cards">
              <div className="tp-card">
                  <img src={tpcard} alt="" />
                  <p>Things to Know When Choosing the <br /> Perfect Sofa</p><br />
                  <button className='cen-btnn'>See More Product</button>
              </div>
              <div className="tp-card">
                  <img src={tpcard1} alt="" />
                  <p>Things to Know When Choosing the <br /> Perfect Sofa</p><br />
                  <button className='cen-btnn'>See More Product</button>
              </div>
              <div className="tp-card">
                  <img src={tpcard2} alt="" />
                  <p>Things to Know When Choosing the <br /> Perfect Sofa</p><br />
                  <button className='cen-btnn'>See More Product</button>
              </div>
            </div>
          </section>
          <footer>
            <div className="ft">
              <img src={ft} alt="" />
              <p>Join Now For Early Access</p>
              <p>Suspendisse eu velit est. Cras nec vestibulum <br /> quam. Donec tincidunt purus nec enim tincidunt, sit</p>
              <input type="text" name="" id="" />
            </div>
          </footer>
    </div>
  )
}

export default Home