import { Link } from "react-router-dom"

const SubmitReq = () => {
    return (
        <div className="container">
            STILL CODING
            {/* <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="files" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div> */}
            <Link to="/studentHOME">Go Back</Link>
        </div>
         
    );
}

export default SubmitReq;