import React from "react";
import shoes from './images/image 35.png';
import phone from './images/image 35 (1).png';
import watch from './images/Frame 44.png';
import frame from './images/Frame 31.png';
import img from './images/Ellipse 2.png';
import './Trending.css';

export default function Trending() {
  const groups = [
    [{ image: shoes, label: 'Shoes' }, { image: phone, label: 'Phone' }, { image: frame, label: 'Frame' }, { image: watch, label: 'Watch' }],
    [{ image: frame, label: 'Frame' }, { image: phone, label: 'Phone' }, { image: watch, label: 'Watch' }, { image: shoes, label: 'Shoes' }]
  ];

  return (
    <section className="pt-5" id="exercise">
      <h2 className="pb-4  ">Top rate product</h2>
      <p className="fw-bold">Browse our most top rate product</p>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {groups.map((group, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <div className="row">
                {group.map((item, index) => (
                  <div key={index} className="col-sm-6 col-lg-3 mb-4">
                    <div className="card text-center">
                      <img src={item.image} className="card-img-top" alt={item.label} />
                      <div className="card-body">
                        <p className="product-title">{item.label}</p>
                        <h6>Super good with new chips</h6>
                        <p className="product-description">This product exceeded my expectations! It’s easy to use, well-designed, and offers great value for the price.</p>
                        <div className="rating text-warning">★★★★★</div>
                        <div className="reviewer-info">
                          <img src={img} alt="Reviewer" className="profile-img" />
                          <div>Mark Villiams</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}


export function Top(){

  return (
    <div style={{width: '100%', height: '100%', paddingTop: 112.50, paddingBottom: 112.50, background: '#0B0A2F', boxShadow: '0px 22.5px 56.25px rgba(11, 10, 47, 0.03)', borderRadius: 90, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
    <div style={{paddingLeft: 18, paddingRight: 18, paddingTop: 9, paddingBottom: 9, background: '#F6F5FF', borderRadius: 56.25, justifyContent: 'flex-start', alignItems: 'center', gap: 6.75, display: 'inline-flex'}}>
        <div style={{width: 20.25, height: 20.25, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 20.25, height: 20.25, position: 'relative'}}>
                <div style={{width: 0, height: 1.77, left: 10.25, top: 13.92, position: 'absolute', border: '1.69px #3B82F6 solid'}}></div>
                <div style={{width: 8.44, height: 2.53, left: 6.03, top: 16.03, position: 'absolute', border: '1.69px #3B82F6 solid'}}></div>
                <div style={{width: 10.12, height: 0, left: 5.19, top: 18.56, position: 'absolute', border: '1.69px #3B82F6 solid'}}></div>
                <div style={{width: 11.81, height: 11.81, left: 4.22, top: 1.69, position: 'absolute', border: '1.69px #3B82F6 solid'}}></div>
                <div style={{width: 2.89, height: 6.16, left: 1.72, top: 3.67, position: 'absolute', border: '1.69px #3B82F6 solid'}}></div>
                <div style={{width: 2.89, height: 6.16, left: 15.63, top: 3.67, position: 'absolute', border: '1.69px #3B82F6 solid'}}></div>
                <div style={{width: 20.25, height: 20.25, left: 0, top: 0, position: 'absolute', opacity: 0}}></div>
            </div>
        </div>
        <div style={{color: '#3B82F6', fontSize: 13.50, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>TOP website rating in the world</div>
    </div>
    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 15.75, display: 'flex'}}>
        <div style={{width: 871, textAlign: 'center', color: 'white', fontSize: 67.50, fontFamily: 'Poppins', fontWeight: '700', lineHeight: 74.25, wordWrap: 'break-word'}}>Join our community and write your review</div>
        <div style={{width: 721, textAlign: 'center', color: '#91909E', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', lineHeight: 31.50, wordWrap: 'break-word'}}>Share your insights to help others choose better. Your opinion matters!</div>
    </div>
    <div style={{width: 399.81, height: 67.94, transform: 'rotate(-44.74deg)', transformOrigin: '0 0', background: '#49486A', boxShadow: '101.25px 101.25px 101.25px ', borderRadius: 9999, filter: 'blur(101.25px)'}} />
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 33.75, display: 'inline-flex'}}>
        <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 11.25, display: 'inline-flex'}}>
            <div style={{justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{width: 45, height: 45, position: 'relative'}}>
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', borderRadius: 9999, border: '2.25px #0B0A2F solid'}} />
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
                    <img style={{width: 50.62, height: 76.50, left: -2.25, top: -9, position: 'absolute'}} src="https://via.placeholder.com/51x76" />
                </div>
                <div style={{width: 45, height: 45, position: 'relative'}}>
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', borderRadius: 9999, border: '2.25px #0B0A2F solid'}} />
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
                    <img style={{width: 50.62, height: 76.50, left: -2.25, top: -9, position: 'absolute'}} src="https://via.placeholder.com/51x76" />
                </div>
                <div style={{width: 45, height: 45, position: 'relative'}}>
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', borderRadius: 9999, border: '2.25px #0B0A2F solid'}} />
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
                    <img style={{width: 77.62, height: 117, left: -11.81, top: -21.38, position: 'absolute'}} src="https://via.placeholder.com/78x117" />
                </div>
                <div style={{width: 45, height: 45, position: 'relative'}}>
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', borderRadius: 9999, border: '2.25px #0B0A2F solid'}} />
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
                    <img style={{width: 42.75, height: 65.25, left: -0.56, top: -3.38, position: 'absolute'}} src="https://via.placeholder.com/43x65" />
                </div>
                <div style={{width: 45, height: 45, position: 'relative'}}>
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', borderRadius: 9999, border: '2.25px #0B0A2F solid'}} />
                    <div style={{width: 45, height: 45, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
                    <img style={{width: 50.62, height: 76.50, left: -2.25, top: -9, position: 'absolute'}} src="https://via.placeholder.com/51x76" />
                    <img style={{width: 55.12, height: 84.38, left: -6.19, top: -6.75, position: 'absolute'}} src="https://via.placeholder.com/55x84" />
                </div>
            </div>
            <div style={{color: 'white', fontSize: 15.75, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>289,199 user has join and write a review</div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{borderRadius: 30, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 14, paddingBottom: 14, background: '#377BF7', borderRadius: 30, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', letterSpacing: 0.07, wordWrap: 'break-word'}}>Sign Up</div>
                    </div>
                </div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{borderRadius: 30, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 14, paddingBottom: 14, borderRadius: 30, overflow: 'hidden', border: '1px #377BF7 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', letterSpacing: 0.07, wordWrap: 'break-word'}}>Write a review</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 369.22, height: 67.94, transform: 'rotate(-44.74deg)', transformOrigin: '0 0', background: '#49486A', boxShadow: '101.25px 101.25px 101.25px ', borderRadius: 9999, filter: 'blur(101.25px)'}} />
</div>
  );
}