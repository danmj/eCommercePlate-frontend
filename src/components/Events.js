import React from 'react';

const Events = (props) => {

  return(

    <div class="container py-5" style={{ backgroundColor: '#eeeeee' }}>

        <div class="row text-center text-white mb-5">
            <div class="col-lg-8 mx-auto">
                <h1 class="display-4" style={{ color: 'black' }}>Upcoming Events</h1>
              </div>
        </div>


        <div class="row">
            <div class="col-lg-7 mx-auto">
                <ul class="timeline">
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Summer Sales Event</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>June 10, 2019</span>
                        <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">New Product Release</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>October 4, 2019</span>
                        <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper.</p>
                        <p class="text-small mt-2 font-weight-light">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.</p>
                    </li>
                    <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div class="timeline-arrow"></div>
                        <h2 class="h5 mb-0">Holiday Sales Event</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>November 20, 2019</span>
                        <p class="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

  )
}

export default Events
