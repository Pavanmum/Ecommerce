/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://m.media-amazon.com/images/I/815lPWcIyrL._UL1500_.jpg",
  };
  const [orderedProduct ] = useState(true); //   setorderProduct
  
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-image d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/815lPWcIyrL._UL1500_.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/815lPWcIyrL._UL1500_.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/815lPWcIyrL._UL1500_.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/815lPWcIyrL._UL1500_.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">Rs 1000/-</p>
                  <div className="d-flex align-items-center">
                    <ReactStars count={5} size={24} activeColor="#ffd700" />
                    <p className="t-review mb-0">(on 2 Review)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data"> Headsets</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Cateogries:</h3>
                    <p className="product-data">
                      lena hey toh lele categories may kuch nhi rakha hey,jab
                      jeb may ho gandhi nhi dekh teh cateogrie
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availabilty:</h3>
                    <p className="product-data">In stock</p>
                  </div>
                  <div className="d-flex gap-10  flex-column my-2">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          S
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          M
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          XL
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          XXL
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-10  flex-column my-2">
                    <h3 className="product-heading">
                      Color:
                      <div className="d-flex flex-wrap">
                        <ul className="colors ps-0">
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </h3>
                  </div>
                  <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
                    <div className>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex  align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup">But It Now </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="addtocard">
                        {" "}
                        <TbGitCompare className="fs-5" />
                        Add to Comaper
                      </a>
                    </div>
                    <div>
                      <a href="heart">
                        <AiOutlineHeart className="fs-5" />
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10  my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free shopping and returns avabilable on all orders We ship
                      all US domestic orders with <br />{" "}
                      <b> 5-10 bussiness days </b>
                    </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  
                  <a href="// eslint-disable-next-line jsx-a11y/anchor-is-valid " onClick={() => {copyToClipboard("https://m.media-amazon.com/images/I/815lPWcIyrL._UL1500_.jpg");}}>
                  Copy Product Link
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="description-wapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Jai Hanuman gyan gun sagar Jai Kapis tihun lok ujagar Ram doot
                  atulit bal dhama Anjani putra Pavan sut nama Mahabir vikram
                  Bajrangi Kumati nivar sumati Ke sangi Kanchan varan viraj
                  subesa Kanan Kundal Kunchit Kesha Hath Vajra Aur Dhwaja Viraje
                  Kaandhe moonj janeu saaje Sankar suvan kesri Nandan Tej
                  prataap maha jag vandan Vidyavaan guni ati chatur Ram kaj
                  karibe ko aatur Prabhu charitra sunibe ko rasiya Ram Lakhan
                  Sita man Basiya Sukshma roop dhari Siyahi dikhava Vikat roop
                  dhari lank jalava Bhim roop dhari asur sanhare Ramachandra ke
                  kaj sanvare Laye Sanjivan Lakhan Jiyaye Shri Raghuvir Harashi
                  ur laye Raghupati Kinhi bahut badai Tum mama priya
                  Bharat-hi-sam bhai Sahas badan tumharo yash gaave As kahi
                  Shripati kanth lagaave Sankadhik Brahmaadi Muneesa Narad Sarad
                  sahit Aheesa Yam Kuber Dikpaal Jahan te Kavi kovid kahi sake
                  kahan te Tum upkar Sugreevahin keenha Ram milaye rajpad deenha
                  Tumhro mantra Vibheeshan maana Lankeshwar Bhaye Sab jag jana
                  Yug sahasra yojan par Bhanu Leelyo tahi madhur phal janu
                  Prabhu mudrika meli mukh mahee Jaladhi langhi gaye achraj
                  nahee Durgam kaj jagat ke jete Sugam anugraha tumhre tete Ram
                  duwaare tum rakhvare Hot na agya binu paisare Sab sukh lahai
                  tumhari sarna Tum rakshak kahu ko darna Aapan tej samharo
                  aapai Teenon lok hank te kanpai Bhoot pisaach Nikat nahin
                  aavai Mahavir jab naam sunavai Nase rog harae sab peera Japat
                  nirantar Hanumat beera Sankat se Hanuman chhudavai Man Kram
                  Vachan dhyan jo lavai Sab par Ram tapasvee raja Tin ke kaj
                  sakal Tum saja Aur manorath jo koi lavai Soi amit jeevan phal
                  pavai Charon jug partap tumhara Hai parsiddh jagat ujiyara
                  Sadhu Sant ke tum Rakhware Asur nikandan Ram dulare Ashta
                  siddhi nav nidhi ke data As var deen Janki mata Ram rasayan
                  tumhare pasa Sada raho Raghupati ke dasa Tumhare bhajan Ram ko
                  pavai Janam janam ke dukh bisraavai Antkaal Raghuvar pur jayee
                  Jahan janam Hari Bhakt Kahayee Aur Devta Chitt na dharahin
                  Hanumat sei sarv sukh karahin Sankat kate mite sab peera Jo
                  sumirai Hanumat Balbeera Jai Jai Jai Hanuman Gosain Kripa
                  Karahun Gurudev ki nayin Jo shat bar path kare koi Chhutahin
                  bandi maha sukh hoi Jo yeh padhe Hanuman Chalisa Hoye siddhi
                  saakhi Gaureesa Tulsidas sada hari chera Keejai Nath Hriday
                  mahn dera Pavan Tanay Sankat Harana Mangala Murati Roop Ram
                  Lakhan Sita Sahita Hriday Basahu Soor Bhoop
                </p>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="reviews-wrapper pb-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Review</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars count={5} size={24} activeColor="#ffd700" />
                      <p className="mb-0">Based on 2 Review</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="review"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className=" d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        placeholder="Comment"
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Escobar</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Jai Hanuman gyan gun sagar Jai Kapis tihun lok ujagar Ram
                      doot atulit bal dhama Anjani putra Pavan sut nama Mahabir
                      vikram Bajrangi Kumati nivar sumati Ke sangi Kanchan varan
                      viraj subesa Kanan Kundal Kunchit Kesha Hath Vajra Aur
                      Dhwaja Viraje Kaandhe moonj janeu saaje Sankar suvan kesri
                      Nandan Tej prataap maha jag vandan Vidyavaan guni ati
                      chatur Ram kaj karibe ko aatur Prabhu charitra sunibe ko
                      rasiya Ram Lakhan Sita man Basiya Sukshma roop dhari
                      Siyahi dikhava Vikat roop dhari lank jalava Bhim roop
                      dhari asur sanhare Ramachandra ke kaj sanvare Laye
                      Sanjivan Lakhan Jiyaye Shri Raghuvir Harashi ur laye
                      Raghupati Kinhi bahut badai Tum mama priya Bharat-hi-sam
                      bhai Sahas badan tumharo yash gaave As kahi Shripati kanth
                      lagaave Sankadhik Brahmaadi Muneesa Narad Sarad sahit
                      Aheesa Yam Kuber Dikpaal Jahan te Kavi kovid kahi sake
                      kahan te Tum upkar Sugreevahin keenha Ram milaye rajpad
                      deenha Tumhro mantra Vibheeshan maana Lankeshwar Bhaye Sab
                      jag jana Yug sahasra yojan par Bhanu Leelyo tahi madhur
                      phal janu Prabhu mudrika meli mukh mahee Jaladhi langhi
                      gaye achraj nahee Durgam kaj jagat ke jete Sugam anugraha
                      tumhre tete Ram duwaare tum rakhvare Hot na agya binu
                      paisare Sab sukh lahai tumhari sarna Tum rakshak kahu ko
                      darna Aapan tej samharo aapai Teenon lok hank te kanpai
                      Bhoot pisaach Nikat nahin aavai Mahavir jab naam sunavai
                      Nase rog harae sab peera Japat nirantar Hanumat beera
                      Sankat se Hanuman chhudavai Man Kram Vachan dhyan jo lavai
                      Sab par Ram tapasvee raja Tin ke kaj sakal Tum saja Aur
                      manorath jo koi lavai Soi amit jeevan phal pavai Charon
                      jug partap tumhara Hai parsiddh jagat ujiyara Sadhu Sant
                      ke tum Rakhware Asur nikandan Ram dulare Ashta siddhi nav
                      nidhi ke data As var deen Janki mata Ram rasayan tumhare
                      pasa Sada raho Raghupati ke dasa Tumhare bhajan Ram ko
                      pavai Janam janam ke dukh bisraavai Antkaal Raghuvar pur
                      jayee Jahan janam Hari Bhakt Kahayee Aur Devta Chitt na
                      dharahin Hanumat sei sarv sukh karahin Sankat kate mite
                      sab peera Jo sumirai Hanumat Balbeera Jai Jai Jai Hanuman
                      Gosain Kripa Karahun Gurudev ki nayin Jo shat bar path
                      kare koi Chhutahin bandi maha sukh hoi Jo yeh padhe
                      Hanuman Chalisa Hoye siddhi saakhi Gaureesa Tulsidas sada
                      hari chera Keejai Nath Hriday mahn dera Pavan Tanay Sankat
                      Harana Mangala Murati Roop Ram Lakhan Sita Sahita Hriday
                      Basahu Soor Bhoop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="Product-card py-5 home-wrapper-2">
          <div className="row">
            <h3 className="section-heading">Featured Collection</h3>
            <ProductCard />
          </div>
      </Container>
    </>
  );
};

export default SingleProduct;
