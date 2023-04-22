import React from "react";

function Table() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-9 ">
          <div className="card mb-2 shadow-sm p-3 mb-5 bg-white rounded">
            <div className="card-header">
              <h3 className="bg-light m-0 p-2">Lattes Report</h3>
            </div>
            <table class="table table-striped">
              <thead>
                <tr className="bg-dark text-white">
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Cattegory</th>
                  <th scope="col">Date Posted</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Post One</td>
                  <td>Web Development</td>
                  <td>July 12,2017</td>
                  <td>
                    <a className="btn btn-secondary">
                      {" "}
                      <i class="fa-solid fa-angles-right px-1"></i>Details
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Post Two</td>
                  <td>Tech Gadgets</td>
                  <td>July 13,2018</td>
                  <td>
                    <a className="btn btn-secondary">
                      {" "}
                      <i class="fa-solid fa-angles-right px-1"></i>Details
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Post Three</td>
                  <td>the Bird</td>
                  <td>July 14,2018</td>
                  <td>
                    <a className="btn btn-secondary">
                      {" "}
                      <i class="fa-solid fa-angles-right px-1"></i>Details
                    </a>
                  </td>
                </tr>
                <tr className="border-white">
                  <th scope="row">4</th>
                  <td>Post Four</td>
                  <td>Business</td>
                  <td>July 15,2018</td>
                  <td>
                    <a className="btn btn-secondary">
                      {" "}
                      <i class="fa-solid fa-angles-right px-1"></i>Details
                    </a>
                  </td>
                </tr>
                <tr className="border-white">
                  <th scope="row">5</th>
                  <td>Post Five</td>
                  <td>Web Development</td>
                  <td>July 14,2019</td>
                  <td>
                    <a className="btn btn-secondary">
                      {" "}
                      <i class="fa-solid fa-angles-right px-1"></i>Details
                    </a>
                  </td>
                </tr>
                <tr className="border-white">
                  <th scope="row">6</th>
                  <td>Post Six</td>
                  <td>Health & Wellness</td>
                  <td>July 15,2020</td>
                  <td>
                    <a className="btn btn-secondary">
                      {" "}
                      <i class="fa-solid fa-angles-right px-1"></i>Details
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* card */}
        <div className="col-lg-3   ">
          <div className="card bg-primary text-white mb-3">
            <div className="card-header text-center ">
              <h4>Post</h4>
              <h1>
                <i className="fa-solid fa-pencil p-2"></i>6
              </h1>
              <button className="btn btn-outline-white border-white text-white fs">
                Wiew
              </button>
            </div>
          </div>
          <div className="card bg-success text-white mb-3">
            <div className="card-header text-center">
              <h4>Categories</h4>
              <h1>
                <i class="fa-solid fa-users-gear p-2"></i>4
              </h1>
              <button className="btn btn-outline-white border-white text-white fs">
                Wiew
              </button>
            </div>
          </div>
          <div className="card bg-warning text-white mt-1">
            <div className="card-header text-center">
              <h4>Users</h4>
              <h1>
                <i class="fa-solid fa-folder-open p-2"></i>2
              </h1>
              <button className="btn btn-outline-white border-white text-white fs">
                Wiew
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
