import { Link } from "react-router-dom"

const CheckReq = () => {
    return (
        <div className="container">
            <h2 className="mt-5">Requirements</h2>
            <div className="mt-5">
                <table class="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Activity</th>
                            <th scope="col">Submitted</th>
                            <th scope="col">Missing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Task 1</td>
                            <td><i class="fa fa-check"></i></td>
                            <td>  </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Task 2</td>
                            <td></td>
                            <td><i class="fa fa-warning"></i></td>
                        </tr>  <tr>
                            <th scope="row">3</th>
                            <td>Task 3</td>
                            <td></td>
                            <td><i class="fa fa-warning"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link to="/studentHOME"> Go Back </Link>
        </div>
    );
}

export default CheckReq;