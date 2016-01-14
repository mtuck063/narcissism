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
          <img src={this.props.sesa1} />
        </div>

        <div className="whitespace"></div>

        <div className="row triple-phones no-margin">
          <div className="col s12 m4"><img src={this.props.sesa2} /></div>
          <div className="col s12 m4"><img src={this.props.sesa3}/></div>
          <div className="col s12 m4"><img src={this.props.sesa4}/></div>
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
          <img src={this.props.sesa5}/>
        </div>

        <div className="whitespace"></div>

        <div className="full">
          <img src={this.props.sesa6}/>
        </div>

      </div>
    )

  }

});