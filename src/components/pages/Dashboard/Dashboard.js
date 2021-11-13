import React, { Fragment, useState } from "react";
import Banner from "./Banner";
import DashboardCard from "./DashboardCard";
import { useFormik } from "formik";
import "./Dashboard.css";
import SearchResult from "../../results/SearchResult";
import { getHotels } from "../../../action/general-action";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";

function Dashboard() {
  let history = useHistory();
  const [results, setResults] = useState([]);
  const { addToast } = useToasts();
  const [flag, setFlag] = useState(false);
  const validate = (values) => {
    const errors = {};
    if (!values.checkIn) {
      errors.checkIn = "*";
    } else if (values.checkOut < values.checkIn) {
      errors.checkIn = "!";
    }

    if (!values.checkOut) {
      errors.checkOut = "*";
    } else if (values.checkOut < values.checkIn) {
      errors.checkOut = "!";
    }
    return errors;
  };

  const routetopaymentpage = () => {
    //console.log("clicked")
    setFlag(true);
    if(flag)
    {
      history.push("/payment")
    }
  }

  const formik = useFormik({
    initialValues: {
      To: "",
      checkOut: "",
      numberOfPeople: 1,
      numberOfKids: 0,
      From: "New Delhi",
    },
    validate,
    onSubmit: (values) => {
      
      getHotels(values.From)
        .then((res) => {
          if (res) {
            addToast("Hotels previewed are shown below!", {
              appearance: "success",
            });
            setResults(res);
          }
        })
        .catch((err) => {
          addToast(err.response.data.message, {
            appearance: "warning",
          });
        });
    },
  });

  return (
    <div className="dashboard">
      <div className="dashboard__form">
        <form className="dashboard__formInput" onSubmit={formik.handleSubmit}>
          <div className="dashboard__formInputTop">
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">From</div>
              <input
                className="dashboard__line2 big"
                type="text"
                name="From"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              ></input>
            </div>
            {formik.touched.location && formik.errors.location ? (
              <div className="dashboard__formInput--error">
                {formik.errors.location}
              </div>
            ) : null}
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">To</div>
              <input
                className="dashboard__line2 big"
                type="text"
                name="To"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkIn}
              ></input>
            </div>
            {formik.touched.checkIn && formik.errors.checkIn ? (
              <div className="dashboard__formInput--error">
                {formik.errors.checkIn}
              </div>
            ) : null}
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Date</div>
              <input
                className="dashboard__line2 big"
                type="date"
                name="checkOut"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.checkOut}
              ></input>
            </div>
            {formik.touched.checkOut && formik.errors.checkOut ? (
              <div className="dashboard__formInput--error">
                {formik.errors.checkOut}
              </div>
            ) : null}
          </div>
          <div className="dashboard__formInputBottom">
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Adults</div>
              <input
                className="dashboard__line2 small"
                type="number"
                min={1}
                defaultValue={1}
                placeholder={1}
                name="numberOfPeople"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numberOfPeople}
              ></input>
            </div>
            <div className="dashboard__block">
              <div className="dashboard__line1 f-text">Kids</div>
              <input
                className="dashboard__line2 small"
                type="number"
                min={0}
                placeholder={0}
                name="numberOfKids"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numberOfKids}
              ></input>
             
            </div>
            <div className="dashboard__block">
            <div className="dashboard__line1 f-text">Classes</div>
            <select name="classes" id="classes" className="dashboard__line2 big">
                <option value="classes">select</option>
                <option value="1A">AC first Class(1A)</option>
                <option value="EC">Exec. Chair Car (EC)</option>
                <option value="SL">Sleeper(SL)</option>
                <option value="CC">AC Chair car(CC)</option>
              </select>
            </div>
            <div className="dashboard__block">
            <div className="dashboard__line1 f-text ">Category</div>
            <select name="category" id="category" className="dashboard__line2 bigq">
                <option value="general">General</option>
                <option value="1A">Ladies</option>
                <option value="EC">Divyaang</option>
                <option value="SL">Tatkal</option>
                <option value="CC">Premium Tatkal</option>
              </select>
            </div>
           
            <div className="dashboard__block search_block">
              <div className="dashboard__line1 f-text "></div>
              <button className="dashboard__button" type="submit" onClick={routetopaymentpage}>
                Booking
              </button>
            </div>
         
            
          </div>
        </form>
      </div>
      {/* <Banner /> */}
      {results.length === 0 && (
        <Fragment>
          <div className="dashboard__section">
            <DashboardCard
              src="https://res.cloudinary.com/dlanbfgjm/images/f_auto,q_auto/w_780,h_464,c_fill,g_auto/v1580377941/6yvwnyjxzuztv7qz_1580188155_nyvfak/6yvwnyjxzuztv7qz_1580188155_nyvfak-780x464.jpg"
              title="International Package"
              description="Unique activities we can do together, led by a world of hosts."
            />
            <DashboardCard
              src="https://www.bontravelindia.com/wp-content/uploads/2021/10/Buddhist-Circuit-Tourist-Train-1000x565.jpg"
              title="Buddhist Circuit Tourist Train"
              description="India, the country where Buddhism originated has rich memories of the Buddhist legacy."
            />
            <DashboardCard
              src="https://blog-content.ixigo.com/wp-content/uploads/2018/05/blog11.jpg"
              title="Rail Tour Packages"
              description="Comfortable places, with room for friends or family."
            />
          </div>
          {/* <div className="dashboard__section">
            <DashboardCard
              src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
              title="3 Bedroom Flat in Bournemouth"
              description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
              price="Rs 2300/night"
            />
            <DashboardCard
              src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
              title="Penthouse in London"
              description="Enjoy the amazing sights of delhi with this stunning penthouse"
              price="Rs 3500/night"
            />
            <DashboardCard
              src="https://media.nomadicmatt.com/2018/apartment.jpg"
              title="1 Bedroom apartment"
              description="Superhost with great amenities and a fabolous shopping complex nearby"
              price="Rs 2700/night"
            />
          </div> */}
        </Fragment>
      )}
      {results.length > 0 && (
        <Fragment>
          {results.map((result) => (
            <SearchResult
              key={result.id}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
              hotelID={result.id}
              location={result.location}
              title={result.name}
              description={result.ameneties}
              from={formik.values.checkIn}
              to={formik.values.checkOut}
              star={result.rating}
              price={result.price}
            />
          ))}
        </Fragment>
      )}
    </div>
  );
}

export default Dashboard;
