import React from "react";
import './users.css';
import { useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Users = () => {

const [show, setShow] = useState(false);

const [users, setUsers] = useState([]);


const params = useParams()

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users",{params:{limit:3}}).then((res) => {

            setUsers(res.data);

        }).catch((err) => {

            console.log(err);

        })

    }, [])

    return (
        <>

<div className="row align-items-center text-center">
                <div className="col">
                    <div className="topbarElements d-inline-flex align-items-center">
                        <div>&#x27A4;</div>
                        <div className="text-start d-md-block d-none">
                            <h5 className="p-0 m-0 text-uppercase">Office</h5>
                            <p className="p-0 m-0 text-secondary">123 Broad St, Cookeville, TN</p>
                        </div>
                    </div>
                </div>
                <div className="col border-start border-end">
                    <div className="topbarElements d-inline-flex align-items-center">
                        <div>&#x270E;</div>
                        <div className="text-start d-md-block d-none">
                            <h5 className="p-0 m-0 text-uppercase">Email</h5>
                            <p className="p-0 m-0 text-secondary">example@email.com</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="topbarElements d-inline-flex align-items-center">
                        <div>
                            &#x260F;
                        </div>
                        <div className="text-start d-md-block d-none">
                            <h5 className="p-0 m-0 text-uppercase">Phone</h5>
                            <p className="p-0 m-0 text-secondary">+91 123 123 2323</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Leazen</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <a className="nav-link mx-2 active" aria-current="page" href="#">Users</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-2" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Contact us</a></li>
                                </ul>
                            </li>
                            <li className="nav-item flare">
                                <a className="nav-link mx-2" href="#">Get A Quote <span className="ms-2">&#x2192;</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            

        {users.map((user)=>{


return  <div className="container-fluid bg-light text-dark" key={user.id}>
<div>
      <div className="d-style btn btn-brc-tp border-3 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-2 shadow-sm">
       
        <div className="row align-items-center mt-4  mb-4" >
          <div className="col-12 col-md-2">
            <h5 className="pt-3 text-50 text-100 text-primary-d1 letter-spacing">
            {user.name}
            </h5>
          </div>

          <div className="col-12 col-md-2">
            <h5 className="pt-3 text-50 text-600 text-dark-d1 letter-spacing">
              E-Mail
            </h5>
            <div className="text-secondary-d1 text-120">
              <span className="text-50">{user.email}</span>
            </div>
          </div>

          <div className="col-12 col-md-2">
          <h5 className="pt-3 text-50 text-600 text-dark-d1 letter-spacing">
              Phone
            </h5>
            <div className="text-secondary-d1 text-120">
            <span className="text-50">{user.phone}</span>
            </div>
          </div>

          <div className="col-12 col-md-2">
          <h5 className="pt-3 text-50 text-600 text-dark-d1 letter-spacing">
              Website
            </h5>
            <div className="text-secondary-d1 text-120">
            <span className="text-50">{user.website}</span>
            </div>
          </div>

          <div className="col-12 col-md-2">
          <h5 className="pt-3 text-50 text-600 text-dark-d1 letter-spacing">
              City
            </h5>
            <div className="text-secondary-d1 text-120">
            <span className="text-50">{user.address.city}</span>
            </div>
          </div>

          <div className="col-12 col-md-2 text-center">
          <Link to={`/details/${user.id}`}  className="f-n-hover btn btn-danger btn-raised px-25 py-25 w-60 text-600 rounded-pill" >View Details</Link>
          </div>
        </div>
      </div>

      </div>
    </div>
 })} 
        </>
    )
}

export default Users;