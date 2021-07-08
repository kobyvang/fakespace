import profilepic from "./motorcycle.jpg";  
import './App.css';
//import axios from "axios"





function App() {
  return (

   
    
<html lang="en">
<head>
    <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel= "stylesheet" href="profile.css"></link>
    <title>Profile</title>
</head>
<body>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
    <div class="container">
       <div class="row">
          <div class="col-md-12">
             <div id="content" class="content content-full-width">
                <div class="profile">
                   <div class="profile-header">
                      <div class="profile-header-cover"></div>
                      <div class="profile-header-content">

                         <div class="profile-header-img">
                            <img src={profilepic} alt=""></img>
                         </div> 
                         <div class="profile-header-info">
                            <h4 class="m-t-10 m-b-5">Koby Vang</h4>
                            <p class="m-b-10">Front end Developer</p>
                            <a href="#" class="btn btn-sm btn-info mb-2">Edit Profile</a>
                         </div>
                      </div>
                      <ul class="profile-header-tab nav nav-tabs">
                      <li class="nav-item"><a href="#profile-home" class="nav-link active show" data-toggle="tab">HOME</a></li>
                         <li class="nav-item"><a href="#profile-post" class="nav-link" data-toggle="tab">POSTS</a></li>
                         <li class="nav-item"><a href="#profile-friends" class="nav-link" data-toggle="tab">FRIENDS</a></li>
                      </ul>
                   </div>
                   <div2 id="Bio">
                         <p class="Name"> Name: Koby Vang</p>
                         <p class="Age"> Age: 23</p>
                         <p class="Living"> Living in: Milwaukee</p>
                         <p class="Status"> Status: Taken</p>
                        </div2>
                </div>
                <div class="profile-content">
                   <div class="tab-content p-0">
                      <div class="tab-pane fade active show" id="profile-post">
                         <ul class="timeline">
                            <li>
                               <div class="timeline-time">
                                  <span class="date">today</span>
                                  <span class="time">04:20</span>
                               </div>
                               <div class="timeline-icon">
                                  <a href="javascript:;">&nbsp;</a>
                               </div>
                               <div class="timeline-body">
                                  <div class="timeline-header">
                                     <span class="userimage"><img src= {profilepic} alt=""></img></span>
                                     <span class="username"><a href="javascript:;">Koby Vang</a> <small></small></span>
                                     <span class="pull-right text-muted">18 Views</span>
                                  </div>
                                  <div class="timeline-content">
                                     <p>
                                        Can't wait for this month to finish up!
                                     </p>
                                  </div>
                                  <div class="timeline-likes">
                                     <div class="stats-right">
                                        <span class="stats-text">259 Shares</span>
                                        <span class="stats-text">21 Comments</span>
                                     </div>
                                     <div class="stats">
                                        <span class="fa-stack fa-fw stats-icon">
                                        <i class="fa fa-circle fa-stack-2x text-danger"></i>
                                        <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                        </span>
                                        <span class="fa-stack fa-fw stats-icon">
                                        <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                        <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                        </span>
                                        <span class="stats-total">4.3k</span>
                                     </div>
                                  </div>
                                  <div class="timeline-footer">
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                  </div>
                                  <div class="timeline-comment-box">
                                     <div class="user"><img src= {profilepic}></img></div>
                                     <div class="input">
                                        <form action="">
                                           <div class="input-group">
                                              <input type="text" class="form-control rounded-corner" placeholder="Write a comment..."></input>
                                              <span class="input-group-btn p-l-10">
                                              <button class="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                              </span>
                                           </div>
                                        </form>
                                     </div>
                                  </div>
                               </div>
                               
                            </li>
                            <li>
                               
                               <div class="timeline-time">
                                  <span class="date">yesterday</span>
                                  <span class="time">20:17</span>
                               </div>
                               
                               
                               <div class="timeline-icon">
                                  <a href="javascript:;">&nbsp;</a>
                               </div>
                              
                              
                               <div class="timeline-body">
                                  <div class="timeline-header">
                                     <span class="userimage"><img src= {profilepic} alt=""></img></span>
                                     <span class="username">Koby Vang</span>
                                     <span class="pull-right text-muted">82 Views</span>
                                  </div>
                                  <div class="timeline-content">
                                     <p>Location: United States</p>
                                  </div>
                                  <div class="timeline-footer">
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                  </div>
                                  <div class="timeline-comment-box">
                                    <div class="user"><img src= {profilepic}></img></div>
                                    <div class="input">
                                       <form action="">
                                          <div class="input-group">
                                             <input type="text" class="form-control rounded-corner" placeholder="Write a comment..."></input>
                                             <span class="input-group-btn p-l-10">
                                             <button class="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                             </span>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                               </div>
                              
                            </li>
                            <li>
                               
                               <div class="timeline-time">
                                  <span class="date">May 18th 2021</span>
                                  <span class="time">08:17</span>
                               </div>
                               
                               
                               <div class="timeline-icon">
                                  <a href="javascript:;">&nbsp;</a>
                               </div>
                               
                               
                               <div class="timeline-body">
                                  <div class="timeline-header">
                                     <span class="userimage"><img src= {profilepic} alt=""></img></span>
                                     <span class="username">Koby Vang</span>
                                     <span class="pull-right text-muted">1,282 Views</span>
                                  </div>
                                  <div class="timeline-content">
                                     <p class="lead">
                                        <i class="fa fa-quote-left fa-fw pull-left"></i>
                                        Kind of Hungry not gonna lie
                                        <i class="fa fa-quote-right fa-fw pull-right"></i>
                                     </p>
                                  </div>
                                  <div class="timeline-footer">
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                  </div>
                                  <div class="timeline-comment-box">
                                    <div class="user"><img src= {profilepic}></img></div>
                                    <div class="input">
                                       <form action="">
                                          <div class="input-group">
                                             <input type="text" class="form-control rounded-corner" placeholder="Write a comment..."></input>
                                             <span class="input-group-btn p-l-10">
                                             <button class="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                             </span>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                               </div>
                               
                            </li>
                            <li>
                               
                               <div class="timeline-time">
                                  <span class="date">May 11th 2021</span>
                                  <span class="time">20:43</span>
                               </div>
                               
                               
                               <div class="timeline-icon">
                                  <a href="javascript:;">&nbsp;</a>
                               </div>
                               
                               
                               <div class="timeline-body">
                                  <div class="timeline-header">
                                     <span class="userimage"><img src= {profilepic}alt=""></img></span>
                                     <span class="username">Koby Vang</span>
                                     <span class="pull-right text-muted">1,021,282 Views</span>
                                  </div>
                                  <div class="timeline-content">
                                     <h4 class="template-title">
                                        <i class="fa fa-map-marker text-danger fa-fw"></i>
                                        795 Folsom Ave, Suite 600 San Francisco, CA 94107
                                     </h4>
                                     <p>Need to hit the gym because this dad bod is coming</p>
                                     <p class="m-t-20">
                                        <img src="../assets/img/gallery/gallery-5.jpg" alt=""></img>
                                     </p>
                                  </div>
                                  <div class="timeline-footer">
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                     <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                  </div>
                                  <div class="timeline-comment-box">
                                    <div class="user"><img src= {profilepic}></img></div>
                                    <div class="input">
                                       <form action="">
                                          <div class="input-group">
                                             <input type="text" class="form-control rounded-corner" placeholder="Write a comment..."></input>
                                             <span class="input-group-btn p-l-10">
                                             <button class="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                             </span>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                               </div>
                              
                            </li>
                            <li>
                               
                               <div class="timeline-icon">
                                  <a href="javascript:;">&nbsp;</a>
                               </div>
                               
                               
                               <div class="timeline-body">
                                  Loading...
                               </div>
                               
                            </li>
                         </ul>
                         
                      </div>
                      
                   </div>
                   
                </div>
                
             </div>
          </div>
       </div>
    </div>


</body>
</html>
  );
}

export default App;
