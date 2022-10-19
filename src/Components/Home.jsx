import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="container text-center mt-5 py-5">
            <h2 className="py-2 my-2"> Select User </h2> 
            <div class="row">
                <div class="col">
                    <div class="card mx-auto" style={
                        { width: "22rem" }
                    }>
                        <img src="https://pngimage.net/wp-content/uploads/2018/05/admin-login-png.png" class="card-img-top" style={
                            { height: "40vh" }
                        } />
                        <div class="card-body">
                            <h5 class="card-title">ADMIN</h5>
                            <Link to="/AdminForm" class="btn btn-primary">Select</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto" style={
                        { width: "22rem" }
                    }>
                        <img src="https://www.kibrispdr.org/data/936/student-logo-png-22.png" class="card-img-top" style={
                            { height: "40vh" }
                        } />
                        <div class="card-body">
                            <h5 class="card-title">STUDENT</h5>
                            <Link to="/StudentForm" class="btn btn-primary">Select</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;