import { useState } from "react";
import { Link } from "react-router-dom";

const AddStudent = () => {
  let [stuid, setStuid] = useState("");
  let [sname, setName] = useState("");
  let [umob, setMob] = useState("");
  let [scourse, setCourse] = useState("");
  let [sdob, setDate] = useState("");
  let [sadd, setAdd] = useState("");

  const post = (stu) => {
    stu.preventDefault();
    let newlist = {
      "id": stuid,
      "sutname": sname,
      "mob": umob,
      "Course1": scourse,
      "Doj": sdob,
      "Address": sadd
    }
    let url = "http://localhost:1234/userapi"
    let postdata = {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify(newlist)
    }
    fetch(url, postdata)
      .then(response => response.json())
      .then(info => {
        alert("student added...");
      })
  }

  

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-4"></div>
        <div className="col-xl-4">
          <form onSubmit={post}>
            <div className="card">
              <div className="card-header">
                <i className="fa fa-user-plus"></i>  Add New Student
                <Link to="/" className="float-end">Home</Link>
              </div>
              <div className="card-body">


                <div className="row mb-3" >
                  <div className="col-xl-12">
                    <label>Stu Id</label>
                    <input type="text" className="form-control" name="fname" value={stuid} onChange={obj => setStuid(obj.target.value)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-xl-12">
                    <label>Stu Name</label>
                    <input type="text" className="form-control" name="mobile" value={sname} onChange={obj => setName(obj.target.value)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-xl-12">
                    <label>Mobile</label>
                    <input type="number" className="form-control" name="mob" value={umob} onChange={obj => setMob(obj.target.value)} />
                  </div>
                </div>



                <div className="row mb-3" >
                  <div className="col-xl-12">
                    <label>Course</label>
                    <input type="text" className="form-control" name="password" value={scourse} onChange={obj => setCourse(obj.target.value)} />
                  </div>
                </div>

                <div className="row mb-3" >
                  <div className="col-xl-12">
                    <label>Date of Join</label>
                    <input type="date" className="form-control" name="dob" value={sdob} onChange={obj => setDate(obj.target.value)} />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-xl-12">
                    <label>Full Address</label>
                    <textarea type="date" className="form-control" name="address" value={sadd} onChange={obj => setAdd(obj.target.value)}></textarea>
                  </div>
                </div>

              </div>
              <div className="card-footer text-center">
                <button type="submit" className="btn btn-primary me-2">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-4"></div>
      </div>
    </div>
  )
}
export default AddStudent;