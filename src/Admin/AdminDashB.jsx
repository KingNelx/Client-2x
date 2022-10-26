import { Link } from "react-router-dom"

const AdminDashB = () => {
    return (
        <div className="container mt-5 py-5">
            <div class="container text-center">
                <h2 className="py-2"> Admin </h2>
                <div class="row">
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://laconcordia.edu.ph/assets/icon/stu.png" class="card-img-top" alt="..." style={{
                                height: "30vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">BSIS 1st year</h5>
                                <Link to="/bsis1" class="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://www.kindpng.com/picc/m/34-343936_transparent-student-logo-png-png-download.png" class="card-img-top" alt="..." style={{
                                height: "30vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">BSIS 2nd Year </h5>
                                <Link to="/bsis2" class="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://www.pinclipart.com/picdir/middle/550-5508102_enrollment-icon-clipart.png" class="card-img-top" alt="..." style={{
                                height: "30vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">Enroll</h5>
                                <Link to="/allStudents" class="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashB;