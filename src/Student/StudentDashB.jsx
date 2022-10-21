const StudentDashB = () => {
    return (
        <div className="container">
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col"> Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary mx-auto">View</button>
                            <button type="button" class="btn btn-outline-danger">Update</button>
                            <button type="button" class="btn btn-outline-info">Drop</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default StudentDashB;