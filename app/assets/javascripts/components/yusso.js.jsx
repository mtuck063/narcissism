var Yusso = React.createClass({
  componentDidMount: function() {
    $(".body").velocity({ opacity: 1, right: '0' }, { duration: 250 }, "linear");
  },
  render: function(){

    return (
      <div className="project">

        <div className="description">
          Yusso — My best friend.
        </div>

        <div className="summary">
          Yusso is a local rapper in the city of Ottawa. To aid in his career I offered to make his very own website.
          With the liberty to do whatever I may choose, the development of the site has given me the another opportunity 
          to learn and grow my knowledge of web development and web design.
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src="/assets/yusso1.png" />
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src="/assets/yusso2.png" />
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src="/assets/yusso3.png" />
        </div>

        <div className="whitespace"></div>
        
        <div className="full">
          <img src="/assets/yusso4.png" />
        </div>

      </div>
    )

  }

});