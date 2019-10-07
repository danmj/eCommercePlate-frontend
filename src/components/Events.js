// The 'Events' page on the website. Formatted as a timeline.
import React from 'react';

const Events = () => {

  // You want to edit the text here to fit your own data.
  return(
    <div className="container py-5 events-header">

        <div className="row text-center text-white mb-5">
            <div className="col-lg-8 mx-auto">
                <h1 className="display-4 events-title">Upcoming Events</h1>
              </div>
        </div>

        <div className="row">
            <div className="col-lg-7 mx-auto">
                <ul className="timeline">
                    <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div className="timeline-arrow"></div>
                        <h2 className="h5 mb-0">Summer Sales Event</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>June 10, 2019</span>
                        <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                    
                    <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div className="timeline-arrow"></div>
                        <h2 className="h5 mb-0">New Product Release</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>October 4, 2019</span>
                        <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper.</p>
                        <p className="text-small mt-2 font-weight-light">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam! Deleniti.</p>
                    </li>
                    <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                        <div className="timeline-arrow"></div>
                        <h2 className="h5 mb-0">Holiday Sales Event</h2><span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>November 20, 2019</span>
                        <p className="text-small mt-2 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Events
