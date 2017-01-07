var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => props.onQueryType(e.target.value)}/>
    <button className="btn hidden-sm-down" onClick={() => props.onNavSearch()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;  

// components with input fields tend to maintain their own state
// and the state is the value of the inputs

// function in some other component will decide what to do with that state

// this allows the component to be used more generally across similar use cases