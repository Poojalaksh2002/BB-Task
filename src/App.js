import React, { useEffect } from "react";
import "./App.css";
import { images as image, bags, bagData } from "./utils/constants.utils";

let bagObj = bagData;

function Shop() {
  let getLocal = localStorage.getItem("shopList");

  function remove(e) {
    let arr = [];
    arr.push(e);
    let val = [];
    arr.map((data) => {
      bagObj.filter((e) => {
        if (data.id !== e.id) {
          val.push(e);
        }
        return null;
      });
      return null;
    });
    bagObj = val;

    const localData = JSON.stringify(bagObj);
    localStorage.setItem("shopList", localData);
    getLocal = localStorage.getItem("shopList");
    window.location.reload();
  }

  useEffect(() => {
    if (!getLocal) {
      const localData = JSON.stringify(bagObj);
      localStorage.setItem("shopList", localData);
    }
  }, []);

  if (getLocal) {
    bagObj = JSON.parse(getLocal);
  }

  if (Object.keys(bagObj).length) {
    return (
      <>
        <div className="container">
          {bagObj.map((data) => {
            return (
              <div className="wrapper" style={{ backgroundColor: `${data?.bg}` }}>
                  <div className="tab_wrapper">
                    <div className="left_tab_container">Lipault</div>
                    <div className="right_tab_container">
                      <div className="tab_container kate">
                        <div className="image_container">
                          <img
                            className="icon"
                            src={image?.user}
                            alt="profile"
                          />
                        </div>
                        <h5 className="user_name">Kate</h5>
                      </div>
                      <div className="tab_container category">
                        <div className="image_container">
                          <img
                            className="icon bag"
                            src={image?.bag}
                            alt="profile"
                          />
                        </div>
                        <h5 className="user_name">Category</h5>
                      </div>
                      <div className="tab_container cart">
                        <div className="right_user_name">Cart</div>
                        <div className="image_container">
                          <img
                            className="icon"
                            src={image?.cart}
                            alt="profile"
                          />
                        </div>
                      </div>
                      <div className="tab_container login">
                        <div className="login_name">Login</div>
                        <div className="image_container">
                          <img
                            className="icon"
                            src={image?.user}
                            alt="profile"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="details">
                  <div className="details_row">
                    <div className="bag_desc">Design Style</div>
                    <div className="bag_details">{data.bagName}</div>
                    <div className="price">{data.price}</div>
                    <div className="variation">
                      {bags.map((e) => {
                        if (e !== data.bagImage) {
                          return <img className="var_image" src={e} alt="bag" />;
                        }
                        return null;
                      })}
                    </div>
                    <div className="button">
                      <button className="buy_now">Add to Cart</button>
                      <div onClick={() => remove(data)} className="image_container">
                        <img className="icon" src={image?.bin} alt="bin" />
                      </div>
                    </div>
                  </div>
                  <div className="image_row">
                    <img className="main_bag" src={data.bagImage} alt="bag" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 style={{ textAlign: "center", fontSize: "4em" }}>
          Oops! Something went wrong
        </h2>
        <p style={{ textAlign: "center", fontSize: "22px" }}>
          Do delete LocalData in localStorage {"&"} then Refresh
        </p>
      </>
    );
  }
}

function App() {
  return (
    <>
      <Shop />
    </>
  );
}

export default App;
