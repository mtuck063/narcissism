var Compass = React.createClass({
  componentDidMount: function() {
    $(".body").velocity({ opacity: 1, right: '0' }, { duration: 250 }, "linear");
  },
  render: function(){

    return (

      <div className="project">

          <div className="description">
            Compass — A platform for teens to showcase a wide range of skills, interest and accomplishments.
          </div>

          <div className="summary grey-text">
            Compass is an e-portfolio platform for the teens involved with 
            <a href="http://liberatedlearners.net/"> Liberated Learners</a>.
            Empowering teens to set their own goals and be able to track and reflect on their progress,
            connecting activities both inside and outside of liberated learners with these goals.
          </div> 

          <div className="whitespace"></div>
          
          <div className="full">
            <img src={this.props.compass1} />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src={this.props.compass2} />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src={this.props.comass3} />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src={this.props.compass4} />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src={this.props.compass5} />
          </div> 

      </div>

    )

  }

});