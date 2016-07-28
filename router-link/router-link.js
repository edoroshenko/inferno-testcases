const Inferno = require( 'inferno' );

const createElement = require( 'inferno-create-element' );

const Component = require( 'inferno-component' );

const InfernoServer = require( 'inferno-server' );

const { Router, Route, browserHistory, Link } = require( 'inferno-router' );

const { Provider } = require( 'inferno-redux' );

const store = {
    dispatch: () => {},
    getState: () => { return {}; }
};

class CoreComponent extends Component
{
    render()
    {
        return <div>
            <Navigation />
            { this.props.children }
        </div>
    }
}

class Page1 extends Component
{
    render()
    {
        return <div>Page 1</div>
    }
}

class Navigation extends Component
{
    render()
    {
        return <div>
            <Link to="/page1" />
            <Link to="/page2" />
        </div>
    }
}

var result = InfernoServer.renderToString( createElement( () => {
    return <Provider store={store}>
        <Router url="/page1" history={ browserHistory } component={ CoreComponent }>
            <Route path="/page1" component={ Page1 } />
        </Router>
    </Provider>
} ) );

console.log(result);