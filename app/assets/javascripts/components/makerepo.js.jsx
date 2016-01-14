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
          <img src="/assets/makerepo3-fd0b64f9ef815fd471968e155b9de0c4.png" />
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src="/assets/makerepo1-6a6768fb53f50b3b5cf4763f769a0cd4.png" />
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src="/assets/makerepo2-b76f5308ae5da91be90f490db5342b51.png" />
        </div>

        <div className="whitespace"></div>
        
        <div className="full full-tablet">
          <img src="/assets/makerepo5-fad2072a13b116fe9fc6e5d0dd892ab2.png" />
        </div>

      </div>

    )

  }

});