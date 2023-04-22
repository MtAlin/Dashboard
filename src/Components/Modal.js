import React from "react";

function Modal() {
  return (
    <section className="bg-light" id="action">
      <div className="container py-3 ">
        <div className="row ">
          <div className=" col-md-3 mb-2">
            <button
              type="button"
              class="btn btn-primary w-100 "
              data-bs-toggle="modal"
              data-bs-target="#exampleModalPost"
              data-bs-whatever="@mdo"
            >
              <i class="fa-solid fa-plus"></i> Add Post
            </button>
          </div>
          <div className=" col-md-3 mb-2">
            <button
              type="button"
              class="btn btn-success w-100 "
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCattegory"
              data-bs-whatever="@mdo"
            >
              <i class="fa-solid fa-plus"></i> Add Cattegory
            </button>
          </div>
          <div className=" col-md-3 mb-2">
            <button
              type="button"
              class="btn bg-warning w-100 "
              data-bs-toggle="modal"
              data-bs-target="#exampleModalUser"
              data-bs-whatever="@mdo"
            >
              <i class="fa-solid fa-plus"></i> Add User
            </button>
          </div>
        </div>
        {/* Ad post modal */}
        <div
          class="modal fade"
          id="exampleModalPost"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-primary text-white">
                <h5 class="modal-title " id="exampleModalLabel">
                  Add Post
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Cattegory
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                      placeholder="Web Development"
                    />
                  </div>
                  <form>
                    <div class="form-group d-flex flex-column">
                      <label for="exampleFormControlFile1">Image Upload</label>
                      <input
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                      />
                      <p className="text-muted f-25 Display 6">Max size 3mb</p>
                    </div>
                  </form>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Message:
                    </label>
                    <textarea
                      class="form-control"
                      id="message-text"
                      rows="5"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* category modal */}
        <div
          class="modal fade  "
          id="exampleModalCattegory"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content ">
              <div class="modal-header bg-success text-white">
                <h5 class="modal-title " id="exampleModalLabel">
                  Add Category
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Cattegory
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ad user */}
        <div
          class="modal fade"
          id="exampleModalUser"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-warning text-white">
                <h5 class="modal-title " id="exampleModalLabel">
                  Add User
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
