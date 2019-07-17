import React from 'react';

const Events = (props) => {

  return(
    <div>
      <div class="jumbotron">
        <h1 class="display-4">Sales Event</h1>
        <p class="lead">Up to 50% off on select items. This summer only!</p>
        <hr class="my-4" />
        <p>Don't miss out. See what products are off!</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>

      <div class="jumbotron">
        <h1 class="display-4">New Product Releases</h1>
        <p class="lead">We are introducing dozens of new products this fall.</p>
        <hr class="my-4" />
        <p>Click the button below to learn more.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  )
}

export default Events
