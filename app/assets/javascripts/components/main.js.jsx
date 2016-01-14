var ReactTransitionGroup = React.addons.TransitionGroup;

var Main = React.createClass({
  getInitialState: function() {
    return { portfolio : true, sesa: false, compass: false, makerepo: false, yusso: false };
  },
  pageChange: function(state){
    this.setState( state );
  },
  changeToRoot: function(e){
    e.preventDefault();
    this.setState({ portfolio :true , sesa: false, compass: false, makerepo: false, yusso: false });
  },
  render: function(){

    var mainContent;

    if( this.state.portfolio ){
      mainContent = <Portfolio pageChange={this.pageChange} />;
    }else if( this.state.sesa) {
      mainContent = <Sesa pageChange={this.pageChange} />;
    }else if( this.state.compass) {
      mainContent = <Compass pageChange={this.pageChange} />;
    }else if( this.state.makerepo) {
      mainContent = <Makerepo pageChange={this.pageChange} />;
    }else if( this.state.yusso) {
      mainContent = <Yusso pageChange={this.pageChange} />;
    }

    return (
      <section className="body">

        <header className="z-depth-3">
          <a className="left root-link" href="#" onClick={this.changeToRoot}>Menelik Tucker </a>
          <span className="full-stack">Full Stack Engineer</span>
          <span className="hide-on-small-only">
            <a href="http://stackoverflow.com/users/4535724/menelik-tucker"><i className="fa fa-stack-overflow"></i></a> ·
            <a href="https://github.com/mtuck063"><i className="fa fa-github"></i></a>  ·
            <a href="https://twitter.com/MenelikTucker"><i className="fa fa-twitter"></i></a>
          </span>
        </header>

        <ReactTransitionGroup >
          {mainContent}
        </ReactTransitionGroup>

      </section>
    )

  }

});


