import { vector } from './img';
import { Link } from 'react-router-dom';
import { per } from './img';
import { useEffect, useState } from 'react';


const Mydashboard = () => {
    let [newlist, setNewlist] = useState([]);
    const getlist = () => {
        fetch("http://localhost:1234/userapi")
            .then(Response => Response.json())
            .then(info => {
                setNewlist(info)
            })
    }

    useEffect(() => {
        getlist();
    })

    let [keyword, setkeyword] = useState("");

    return (
        <section>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-lg-2 left bg-white">
                        <ul>
                            <li><img src={vector} alt='logo'/></li>
                            <li> <i className="fa-solid fa-gauge"></i> Dashboard</li>
                            <li> <i className="fa-solid fa-building-columns"></i> Student</li>
                            <li> <i className="fa-solid fa-book"></i> Chapter</li>
                            <li> <i className="fa-regular fa-circle-question"></i> Help</li>
                            <li> <i className="fa-solid fa-chart-pie"></i> Reports</li>
                            <li> <i className="fa-solid fa-gear"></i> Settings</li>
                        </ul>
                    </div>
                    <div className="col-lg-10 right bg-light">
                        <div className='container-fuild'>
                            <div className='row'>
                                <div className='col-lg-6 mt-2'>
                                    <input className="form-control" type="search" placeholder="Search your course"
                                        onChange={obj => setkeyword(obj.target.value)} />
                                </div>
                                <div className='col-lg-2'></div>
                                <div className='col-lg-4'>
                                    <ul className='d-flex'>
                                        <li><i className="fa-regular fa-circle-question"></i></li>
                                        <li><i className="fa-regular fa-bell"></i></li>
                                        <li><i className="fa-solid fa-book"></i></li>
                                        <li><i className="fa-solid fa-sliders"></i> </li>
                                        <li><img src={per} width={25} height={25} alt='stulogo' /> Adeline H.Dany </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <section className='bg-white rounded p-2'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-2'>
                                        <select className='form-select bg-secondary text-white'>
                                            <option className='text-white'>AY 2024-25</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-2'>
                                        <select className='form-select bg-secondary text-white'>
                                            <option>AY 2024-25</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-5'></div>
                                    <div className='col-lg-3'>
                                        <Link className="nav-link active" to="/stu"><i className="fa fa-user-plus"></i> Add Student</Link>
                                    </div>

                                </div>
                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Stu Id</th>
                                                    <th>Student Name</th>
                                                    <th>Mobile</th>
                                                    <th>Courses</th>
                                                    <th>Date Joined</th>
                                                    <th>Address</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    newlist.map((list, index) => {
                                                        if (list.id.toLowerCase().match(keyword.toLocaleLowerCase()) ||
                                                            list.sutname.toLowerCase().match(keyword.toLocaleLowerCase())||
                                                            list.mob.toLowerCase().match(keyword.toLocaleLowerCase()) ||
                                                            list.Course1.toLowerCase().match(keyword.toLocaleLowerCase())||
                                                            list.Doj.toLowerCase().match(keyword.toLocaleLowerCase()) ||
                                                            list.Address.toLowerCase().match(keyword.toLocaleLowerCase())
                                                        )
                                                            return (
                                                                <tr>
                                                                    <td>{list.id}</td>
                                                                    <td>{list.sutname}</td>
                                                                    <td>{list.mob}</td>
                                                                    <td>{list.Course1}</td>
                                                                    <td>{list.Doj}</td>
                                                                    <td>{list.Address}</td>
                                                                </tr>
                                                            )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </section>

    )
}
export default Mydashboard;