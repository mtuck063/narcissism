var Sesa = React.createClass({
  componentDidMount: function() {
    $(".body").velocity({ opacity: 1, right: '0' }, { duration: 250 }, "linear");
  },
  render: function(){

    return (
      <div className="project">
        <div className="description">
          SESA — Creating a community of software engineers at the University of Ottawa.
        </div>

        <div className="summary grey-text">
          The main objective of SESA is to enrich the student life for all software engineers by offering them more
          than what school can offer alone. As one of the founders of SESA I lead the creation of our first site with 
          many other iteration there after. In collaboration with the other founders we laid out the user experience, 
          creative design and the visual content of the site.
        </div>

        <div className="whitespace"></div>

        <div className="full">
          <img src="/assets/sesa1-6a443568ad20d9b4e010845532d968dc.png" />
        </div>

        <div className="whitespace"></div>

        <div className="row triple-phones no-margin">
          <div className="col s12 m4"><img src="/assets/sesa2-79249af116c83488bcbfb7425f3d8d42.png" /></div>
          <div className="col s12 m4"><img src="/assets/sesa3-88a22c867e4845017808e0988a79cb8c.png"/></div>
          <div className="col s12 m4"><img src="/assets/sesa4-d5dff716c9437775bd33b1a8d39733fc.png"/></div>
        </div>

        <div className="whitespace"></div>

        <div className="filler-text">
          <div className="title grey-text">Many Iterations</div>
          <div className="explanation">
            Built after months of many iterations, SESA's web platform finally was completed using Rails for its backend, 
            Foundation for its frontend and hosted on Heroku for it's free and easy to use services.
          </div>
        </div>

        <div className="whitespace"></div>

        <div className="full">
          <img src="/assets/sesa5-79be4b9786563b55d0e6d34cf463f81e.png"/>
        </div>

        <div className="whitespace"></div>

        <div className="full">
          <img src="/assets/sesa6-ad57c7a0eaad25916b90569f0637cfef.png"/>
        </div>

      </div>
    )

  }

});