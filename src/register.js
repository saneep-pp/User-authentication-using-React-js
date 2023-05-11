import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const [id, idChange] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("india");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errormessage = "Please Enter the value in";
    if (id === null || id === "") {
      isProceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isProceed = false;
      errormessage += " Full Name";
    }
    if (email === null || email === "") {
      isProceed = false;
      errormessage += " Email";
    }
    if (password === null || password === "") {
      isProceed = false;
      errormessage += " Password";
    }
    if (!isProceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isProceed = false;
        toast.warning("Please Enter the valid Email");
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = { id, name, password, email, phone, country, address, gender };
    // console.log(regObj);
    if (isValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registered Successfully");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed:" + err.message);
        });
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>User Registeration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idChange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name<span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email<span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone<span className="errmsg">*</span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="phone"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country<span className="errmsg">*</span>
                    </label>
                    <select
                      className="form-control"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="india">India</option>
                      <option value="us">USA</option>
                      <option value="singapore">Singapore</option>
                      <option value="nepal">Nepal</option>
                      <option value="germany">Germany</option>
                      <option value="japan">Japan</option>
                      <option value="south korea">South Korea</option>
                      <option value="thailand">Thailand</option>
                      <option value="thaiwan">Thaiwan</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Adress</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br />

                    <input
                      checked={gender == "male"}
                      onChange={(e) => setGender(e.target.value)}
                      value="male"
                      name="gender"
                      type="radio"
                      className="app-check"
                    />
                    <label>Male</label>
                    <input
                      checked={gender == "female"}
                      onChange={(e) => setGender(e.target.value)}
                      value="female"
                      type="radio"
                      name="gender"
                      className="app-check"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <a className="btn btn-danger"> Back</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
