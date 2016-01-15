var Makerepo = React.createClass({
  componentDidMount: function() {
    $(".body").velocity({ opacity: 1, right: '0' }, { duration: 250 }, "linear");
  },
  render: function(){

    return (

      <div className="project">

        <div className="description">
          MakerRepo — a repository based platform provided primarily for 3-D Modelling.
        </div>

        <div className="summary">
          A summer project worked under Hanan Anis for Maker Space at the University of Ottawa.
          The goal of MakerRepo is to provide a platform where individuals may upload 3-D designs to a
          repository system that adhered to physical objects. 
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src={this.props.makerepo1} />
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src={this.props.makerepo2} />
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
        </div>
        
        <div className="whitespace"></div>
        
        <div className="full">
          <img src={this.props.makerepo3} />
        </div>

        <div className="whitespace"></div>
        
        <div className="full full-tablet">
          <img src={this.props.makerepo4} />
        </div>

      </div>

    )

  }

});