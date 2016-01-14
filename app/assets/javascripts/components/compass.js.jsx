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
            <img src="/assets/compass1-da9e65573605efc7fef949160fb2aaa0.png" />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src="/assets/compass2-8631b1b38a8930f82ae6639ac2495d03.png" />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src="/assets/compass.png" />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src="/assets/compass4-ad304fa12ad36a1cdd1e5d7d9838072f.png" />
          </div>

          <div className="whitespace"></div>

          <div className="full">
            <img src="/assets/compass5-e5cb3e1a11cc4e35a1f1c7c72e9a8627.png" />
          </div> 

      </div>

    )

  }

});