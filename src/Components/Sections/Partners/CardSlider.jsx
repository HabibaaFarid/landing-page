import { useSelector } from "react-redux";
import icon from "../../images/hospital_icon.jpg";
import { GrLocation } from "react-icons/gr";
import { FaDirections } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default function CardSlider() {
  const { info } = useSelector((state) => state.hospitalInfo);

  const cardStyle = {
    display: "grid",
    border: "1px solid grey",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "2px 2px lightgrey",
    height: "600px",
    width:"100%"
  };
  const imageStyle = {
    width: "250px",
    height: "200px",
    justifySelf: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    marginBottom: "2%",
  };

  const linkStyle = {
    alignSelf: "center",
    color: "black",
    textDecoration: "none",
  };

  const phoneLinkStyle = {
    color: "blue",
    textDecoration: "none",
  };

  const hrStyle = {
    color: "grey",
  };

  const discountGridStyle = {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  };

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
      style={{ padding: "5%" }}
    >
      {info
        ? info.map((hos) =>
            hos.entity_name.length > 0 ? (
              <SwiperSlide key={hos._id}>
                <div style={cardStyle}>
                  <img
                    src={hos.images.length > 0 ? hos.images[0] : icon}
                    alt=""
                    style={imageStyle}
                  />
                  <div style={gridStyle}>
                    <p
                      style={{
                        justifySelf: "start",
                        alignSelf: "center",
                        marginBottom: "0  ",
                      }}
                    >
                      {hos.category}
                    </p>
                    <p
                      style={{
                        justifySelf: "end",
                        alignSelf: "center",
                        marginRight: "2%",
                        marginBottom: "0",
                      }}
                    >
                      {hos.uid}
                    </p>
                  </div>
                  <p style={{ fontWeight: "bold" }}>{hos.entity_name}</p>
                  <p style={linkStyle}>
                    <GrLocation />

                    {"  "}
                    {hos.address}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "80% 10%",
                    }}
                  >
                    <p
                      style={{ alignItems: "center", marginBottom: "0" }}
                    >{`${hos.city}, ${hos.district}, ${hos.state}, ${hos.pincode}`}</p>
                    <FaDirections
                      size={40}
                      style={{
                        alignSelf: "center",
                        justifySelf: "center",
                        color: "#ff7f26",
                      }}
                      onClick={() => {
                        window.open(hos.map_link);
                      }}
                    />
                  </div>
                  <a href={`tel:${hos.mobile_no}`} style={phoneLinkStyle}>
                    <ImPhone style={{ color: "black" }} />
                    {"  "}
                    {hos.mobile_no}
                  </a>
                  <hr style={hrStyle} />
                  <div style={{ display: "grid" }}>
                    <p style={{ justifySelf: "center" }}>Discount%</p>
                    <div style={discountGridStyle}>
                      <p
                        style={{ justifySelf: "center" }}
                      >{`IPD : ${hos.discount_ipd}%`}</p>
                      <p
                        style={{ justifySelf: "center" }}
                      >{`Medicine : ${hos.discount_medicine}%`}</p>
                    </div>
                    <div style={discountGridStyle}>
                      <p
                        style={{ justifySelf: "center" }}
                      >{`OPD : ${hos.discount_opd}%`}</p>
                      <p
                        style={{ justifySelf: "center" }}
                      >{`Diagnostic : ${hos.discount_diagnostic}%`}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              ""
            )
          )
        : ""}
    </Swiper>
  );
}
