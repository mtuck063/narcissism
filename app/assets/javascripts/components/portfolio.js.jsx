var Portfolio = React.createClass({
  getInitialState: function() {
    return { viewingAboutMe: false };
  },
  componentDidMount: function() {
    $(".body").velocity({ opacity: 1, right: '0'  }, { duration: 500 }, "linear");
    $(".imasquare").velocity("fadeIn", { duration: 500 });
  },
  onPageChange: function(e){
    e.preventDefault();
    $(".body").velocity({ opacity: 0, right: '-200px' }, { duration: 250 }, "easeOutCubic");
    var link = $(e.currentTarget).attr("href");
    setTimeout(function() { Turbolinks.visit(link) }, 250);
  },
  componentDidUpdate: function(){
    if(!this.state.viewingAboutMe){
      $(".imasquare").velocity("fadeIn", { duration: 500 });
    }else{
      $(".me").velocity("fadeIn", { duration: 500 });
    }
  },
  openAboutMe: function(e){
    $(".imasquare").addClass("hide-square");
    setTimeout(function() { this.setState({ viewingAboutMe: true }) }.bind(this), 1000);
  },
  hideAboutMe: function(e){
    this.setState({ viewingAboutMe: false });
  },
  submitContactForm: function(e){
    $("#message").attr("placeholder", "");
    setTimeout(function() { $("#message").val("") }, 200);
    setTimeout(function() { $("#message").attr("placeholder", "Sending...") }, 200);
    setTimeout(function() { $("#message").attr("placeholder", "Sent!") }, 1250);
    setTimeout(function() { $("#message").attr("placeholder", "Hey Tucker! Why the heck are you so cool?") }, 3000);
  },
  render: function(){

    var aboutMe;

    if(this.state.viewingAboutMe){
      aboutMe = <div className="me">
                  <div className="close-me" onClick={this.hideAboutMe}>&times;</div>
                  <span>Menelik Tucker is a soon to be graduate (April '16) in Software Engineering at the University 
                  of Ottawa. He is currently a software developer at BiteSite Inc., working on several web 
                  applications. In the past year Menelik has done work for the University of Ottawa making a 
                  repository system for 3D models. Along with work for Liberated Learners, where he made an 
                  e-portfolio web applications for their students. He is also one of the founders of the Software 
                  Engineering Student Association, which he is currently VP Finance.</span>
                </div>;
    }else{
      aboutMe = <div className="imasquare" onClick={this.openAboutMe}>
                  <div className="inner-text">Menelik Tucker</div>
                </div>;
    }

    return (

      <div className="portfolio">

          <div className="about-me">
            {aboutMe}
          </div>

          <h1>PORTFOLIO</h1>

          <div className="row">
            <div className="col s12 m12 l4 small-row">
              <a className="portfolio-item" href="/projects/sesa" onClick={this.onPageChange} >
                <img className="z-depth-1" src={this.props.sesa}/>
                <span className="project-type">Social Project</span>
                <span className="project-name">SESA</span>
              </a> 
            </div>

            <div className="col s12 m12 l8">
              <a className="portfolio-item" href="/projects/compass" onClick={this.onPageChange}>
                <img className="z-depth-1" src={this.props.compass}/>
                <span className="project-type">Contract Work</span>
                <span className="project-name">Compass</span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12">
              <a className="portfolio-item" href="/projects/makerepo" onClick={this.onPageChange}>
                <img className="z-depth-1" src={this.props.makerepo}/>
                <span className="project-type">Contract Work</span>
                <span className="project-name">MakerRepo</span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l8 small-row">
              <a className="portfolio-item" href="/projects/yusso" onClick={this.onPageChange}>
                <img className="z-depth-1" src={this.props.yusso}/>
                <span className="project-type">Personal Project</span>
                <span className="project-name">Yusso</span>
              </a>
            </div>

             <div className="col s12 m12 l4">

              <form action="/contact" acceptCharset="UTF-8" data-remote="true" method="post" onSubmit={this.submitContactForm}>
                <input name="utf8" type="hidden" value="✓"/>
                <div className="row">
                  <div className="col input-field  s12">
                    <i className="fa fa-envelope-o material-icons prefix active"></i>
                    <textarea name="message" id="message" className="materialize-textarea" placeholder="Hey Tucker! Why the heck are you so cool?"></textarea>
                    <label htmlFor="message" className="active">SEND A MESSAGE</label>
                  </div>
                  <div className="col input-field  s12">
                    <button name="button" type="submit" className="waves-effect waves-light btn"><i className="fa fa-paper-plane-o"></i></button>
                  </div>
                </div>
              </form>

             </div>

          </div>

        </div>

    )

  }

});
