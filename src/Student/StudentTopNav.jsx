const StudentTopNav = () => {
    return ( 
        <div className="container">
           
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
              </li>
            </ul>
            
           
            <div class="tab-content">
              <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> home </div>
              <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> profile </div>
              <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> messages </div>
            </div>
        </div>
     );
}
 
export default StudentTopNav;