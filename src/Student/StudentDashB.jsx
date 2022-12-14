import { Link } from "react-router-dom"

const StudentDashB = () => {
    return (
        <div className="container mt-5 py-5">
            <div class="container text-center">
                <h2 className="py-2"> Student </h2>
                <div class="row">
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/enrollment-1181386.png" class="card-img-top" alt="..." style={{
                                height: "30vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">Check Requirements</h5>

                                <Link  to="/checkReq" class="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>
                            <img src="https://advocateabroad.com/wp-content/uploads/2022/01/au-Final_icons_jan2022_service.png" class="card-img-top" alt="..." style={{
                                height: "30vh"
                            }} />
                            <div class="card-body">
                                <h5 class="card-title">Submit Requirement </h5>

                                <Link to="/submitReq" class="btn btn-primary">Select</Link>
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
                                <Link to="/enroll" class="btn btn-primary">Select</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashB;