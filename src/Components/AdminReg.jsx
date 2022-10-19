import { Link } from "react-router-dom"

const AdminReg = () => {
    return (
        <div className="container mt-5 py-5">
            <h2>Admin Sign up</h2> 
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Firstname</label>
                    <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Lastname</label>
                    <input type="text" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-md-6">
                    <label for="inputAddress" class="form-label">Permanent Address</label>
                    <input type="text" class="form-control" id="inputAddress"  />
                </div>
                <div class="col-md-6">
                    <label for="inputAddress2" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" id="inputAddress2"  />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Image</label>
                    <input type="file" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Gender</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label for="inputZip" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputZip" />
                </div>
                <div class="col-md-4">
                    <label for="inputZip" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                <div class="col-12">
                    <Link to="/adminLogin" type="submit" class="btn btn-primary">Create Account</Link>
                </div>
            </form>
        </div>
    );
}

export default AdminReg;