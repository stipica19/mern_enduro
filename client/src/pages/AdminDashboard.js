import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ToastBar from "../components/ToastBar";

const AdminDashboard = () => {
  const [clicked, setClicked] = useState("rez");
  const [reviews, setReviews] = useState([]);
  const [applys, setApplys] = useState([]);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    success: "",
  });
  const snackbarRef = useRef(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/apply");
      //console.log(data);
      setApplys(data);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };
  const getReview = async () => {
    setLoading1(true);
    try {
      const { data } = await axios.get("/api/guestbook");
      // //console.log(data);
      setReviews(data);
    } catch (error) {
      console.error(error.message);
    }
    setLoading1(false);
  };

  useEffect(() => {
    fetchData();
    getReview();
  }, []);

  const handleSubmit = (e, index, id) => {
    //console.log(index);
    const vis = reviews.filter((rev) => rev._id === id);
    const visible = !vis[0].isVisible;
    let newArr = [...reviews];
    newArr[index].isVisible = visible;

    axios.put(`api/guestbook/${id}`, newArr[index]);
    setReviews(newArr);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = axios
      .post("/api/index/addPhoto", formData, config, {
        onUploadProgress: (progressEvent) => {
          let { loaded, total } = progressEvent;
          let procent = Math.floor((loaded * 100) / total);
          //console.log("aaa"`${loaded}`);
        },
      })
      .then((res) => {
        //console.log(res.data);
        setNotification(res.data);
        snackbarRef.current.show();
      })
      .catch((err) => {
        //console.log(err);
        setNotification(err);
        snackbarRef.current.show();
      });
  };

  const submitVideoHandler = async (e) => {
    e.preventDefault();
    //console.log("first", video);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    try {
      const { data } = await axios.post(
        "/api/index/addYouToube",
        {
          video: video,
        },

        config
      );
      //console.log(data);
      setNotification(data);
      snackbarRef.current.show();
    } catch (error) {
      setNotification(error);
    }
  };
  return (
    <section className="docs-main admin">
      {snackbarRef ? (
        <ToastBar ref={snackbarRef} notification={notification} />
      ) : (
        ""
      )}
      <div className="grid-2 admin-grid ">
        <div className="card flex">
          <div className="card bg-light p-3 admin-menu">
            <h3 className="my-2 ">MENU</h3>

            <nav>
              <ul>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("rez")}
                  >
                    Evidencija rezervacija
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("book")}
                  >
                    Evidencija guestbook-a
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("photo")}
                  >
                    Dodaj sliku u Galeriju
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("video")}
                  >
                    Dodaj video u Galeriju
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="card flex">
          {clicked === "rez" ? (
            <table className="apply-toure">
              <thead>
                <tr>
                  <th>TOUR NUMBER</th>
                  <th>TOUR TYPE</th>
                  <th>NAME </th>
                  <th>ADDRESS </th>
                  <th>EMAIL</th>
                  <th>MOB</th>
                  <th>NUMBER PERSON</th>
                  <th>Detaljnije</th>
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  applys.reverse().map((apply) => (
                    <tr key={apply._id}>
                      <td>{apply.tour_number.tour_number}</td>
                      <td>{apply.tour_type}</td>
                      <td>{apply.name}</td>
                      <td>{apply.address}</td>
                      <td>{apply.email}</td>
                      <td>{apply.mobitel}</td>
                      <td>{apply.number_person}</td>
                      <td>
                        <Link to={`/admin-apply/${apply._id}`}>Detaljnije</Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : clicked === "book" ? (
            <>
              <table className="admin-guestbook">
                <thead>
                  <tr>
                    <th>NAME AND SURNAME</th>
                    <th>CITY</th>
                    <th>E-MAIL </th>
                    <th>MESSAGE</th>
                    <th>VIDLJIVO</th>
                  </tr>
                </thead>
                <tbody>
                  {!loading1 &&
                    reviews.map((review, index) => (
                      <tr key={review._id}>
                        <td>{review.name}</td>
                        <td>{review.email}</td>
                        <td>{review.city}</td>
                        <td>{review.message}</td>
                        <td>
                          <input
                            type="checkbox"
                            name={review.name}
                            id="vidiljvo"
                            checked={review.isVisible}
                            onChange={(e) => handleSubmit(e, index, review._id)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </>
          ) : clicked === "photo" ? (
            <div>
              <h3>Dodaj sliku u galeriju</h3>
              <form onSubmit={submitHandler}>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <input
                  type="submit"
                  value="SPREMI"
                  className="btn btn-outline"
                />
              </form>
            </div>
          ) : (
            <div>
              <h3>Dodaj video u galeriju</h3>
              <form onSubmit={submitVideoHandler}>
                <input type="text" onChange={(e) => setVideo(e.target.value)} />
                <input
                  type="submit"
                  value="SPREMI"
                  className="btn btn-outline"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
