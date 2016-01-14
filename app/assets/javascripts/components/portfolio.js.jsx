var Portfolio = React.createClass({
  componentDidMount: function() {
    $(".body").velocity({ opacity: 1, right: '0'  }, { duration: 250 }, "linear");
  },
  onPageChange: function(e){
    e.preventDefault();
    $(".body").velocity({ opacity: 0, right: '-200px' }, { duration: 250 }, "easeOutCubic");
    var link = $(e.currentTarget).attr("href");
    setTimeout(function() { Turbolinks.visit(link) }, 250);
  },
  submitContactForm: function(e){
    $("#message").attr("placeholder", "");
    setTimeout(function() { $("#message").val("") }, 200);
    setTimeout(function() { $("#message").attr("placeholder", "Sending...") }, 200);
    setTimeout(function() { $("#message").attr("placeholder", "Sent!") }, 1250);
    setTimeout(function() { $("#message").attr("placeholder", "Hey Tucker! Why the heck are you so cool?") }, 3000);
  },
  render: function(){

    return (

      <div className="portfolio">

          <h1>PORTFOLIO</h1>

          <div className="row">
            <div className="col s12 m12 l4 small-row">
              <a className="portfolio-item" href="/projects/sesa" onClick={this.onPageChange} >
                <img src="/assets/sesa_home-d1e4fc21b8e860a3c85b51113397f489.jpg"/>
                <span className="project-type">Social Project</span>
                <span className="project-name">SESA</span>
              </a> 
            </div>

            <div className="col s12 m12 l8">
              <a className="portfolio-item" href="/projects/compass" onClick={this.onPageChange}>
                <img src="/assets/compass_home-82a9a67a25634f0545fd804b13edce2e.jpg"/>
                <span className="project-type">Contract Work</span>
                <span className="project-name">Compass</span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l12">
              <a className="portfolio-item" href="/projects/makerepo" onClick={this.onPageChange}>
                <img src="/assets/makerepo_home-4713f22656ab71103e1a05f042cd1e06.jpg"/>
                <span className="project-type">Contract Work</span>
                <span className="project-name">MakerRepo</span>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m12 l8 small-row">
              <a className="portfolio-item" href="/projects/yusso" onClick={this.onPageChange}>
                <img src="/assets/yusso_home-23a8ffc1b4cc7d7bb79f26c345c797e8.jpg"/>
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