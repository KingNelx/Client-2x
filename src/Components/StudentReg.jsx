import { Link } from "react-router-dom"

const StudentReg = () => {
    return (
        <div className="container mt-5 py-5">
            <h2>Student Sign up. </h2> 
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
                <div class="col-md-4">
                    <label for="inputCity" class="form-label">Birthday</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="YYYY-MM-DD" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Religion</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Roman Catholicism</option>
                        <option>Iglesia ni Cristo</option>
                        <option>Seventh-day Adventism</option>
                        <option>Bible Baptist </option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label for="inputZip" class="form-label">ID No</label>
                    <input type="email" class="form-control" id="inputZip" placeholder="2018-02705" />
                </div>
                <div class="col-md-2">
                <label for="inputState" class="form-label">Block</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                        <option>F</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Program</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>BSIS - I</option>
                        <option>BSIS - II</option>
                     
                    </select>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                               Terms of Policy
                            </label>
                    </div>
                </div>
                <div class="col-12">
                    <Link to="/StudentForm" type="submit" class="btn btn-primary">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default StudentReg;