import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {

  const [userData, setUserData] = useState([]);

  useEffect(async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data)
      })
      .catch((err) => {
        console.log(err);

      })
  }, [])
  return (
    <>
      <h1 className='text-center mt-5 mb-5'>EMPLOYEE MANAGEMENT SYSTEM</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {
            userData.map((val, ind) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{val.website}</td>
                  <td>{val.company.name}</td>
                  <td>{val.address.city}</td>
                  <td><button type="button" className="btn btn-success mx-1"><i className="fa-solid fa-pencil"></i></button>
                  <button type="button" className="btn btn-danger"><i class="fa fa-car"></i></button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>

  );
};