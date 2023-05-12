import { useSelector } from "react-redux";
import icon from "../../images/hospital_icon.jpg";
import { GrLocation } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

export default function CardSlider() {
  const { info } = useSelector((state) => state.hospitalInfo);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
      style={{  padding: "5%" }}
    >
      {info.map((hos) => {
        return (
          <SwiperSlide key={hos._id}>
            <div
              style={{
                display: "grid",
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "10px",
                boxShadow: "2px 2px lightgrey",
                height: "600px",
              }}
            >
              <img
                src={hos.images.length > 0 ? hos.images[0] : icon}
                alt=""
                style={{
                  width: "250px",
                  height: "200px",
                  justifySelf: "center",
                }}
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  alignItems: "center",
                  marginBottom: "2%",
                }}
              >
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
                    marginBottom: "0  ",
                  }}
                >
                  {hos.uid}
                </p>
              </div>
              <p style={{ fontWeight: "bold" }}>{hos.entity_name}</p>
              <a
                href={hos.map_link}
                style={{
                  alignSelf: "center",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <GrLocation style={{ alignSelf: "center" }} />
                {"  "}
                {hos.address}
              </a>
              <p>{`${hos.city}, ${hos.district}, ${hos.state}, ${hos.pincode}`}</p>
              <a
                href={`tel:${hos.mobile_no}`}
                style={{ color: "blue", textDecoration: "none" }}
              >
                <ImPhone style={{ color: "black" }} />
                {"  "}
                {hos.mobile_no}
              </a>
              <hr style={{ color: "grey" }} />
              <div style={{ display: "grid" }}>
                <p style={{ justifySelf: "center" }}>Discount%</p>
                <div
                  style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
                >
                  <p
                    style={{ justifySelf: "center" }}
                  >{`IPD : ${hos.discount_ipd}%`}</p>
                  <p
                    style={{ justifySelf: "center" }}
                  >{`Medicine : ${hos.discount_medicine}%`}</p>
                </div>
                <div
                  style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
                >
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
        );
      })}
    </Swiper>
  );
}
