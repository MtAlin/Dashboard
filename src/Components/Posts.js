import React from "react";
import DashboardNavbar from "./DashboardNavbar";
function Posts({ Navlnk }) {
  return (
    <div>
      <DashboardNavbar title={Navlnk.posts} color={Navlnk.primary} icon={Navlnk.edit}/>
      <section className="bg-light">
        <div className="container ">
          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-5  ">
              <div class="input-group py-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div class="input-group-prepend w-25 ">
                  <span
                    class="input-group-text btn btn-primary w-100"
                    id="basic-addon1"
                  >
                    Search
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5">
        <div className="row">
          <div className="col ">
            <div className="card mb-2 shadow-sm p-3 mb-5 bg-white rounded">
              <div className="card-header">
                <h3 className="bg-light m-0 p-2">Lattes Post</h3>
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
                    <td>Larry</td>
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
              <nav aria-label="...">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      Previous
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item ">
                    <a class="page-link" href="#">
                      2 <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
