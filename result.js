/**
 * File: result.js
 * Purpose: Defines React class for randomized results.
 * 
 * Author: Roxanna Meskell (roxymeskell)
 */

var React = require('react');
var e = React.createElement;

class Result extends React.Component {
  render() {
    return e('div',
             {
               className: 'result',
               dangerouslySetInnerHTML: { __html: this.props.html }
             },
             null);
    /*return React.DOM.div(
             {
               className: 'result',
               style: {},
               dangerouslySetInnerHTML: {
                 __html: this.props.html
               }
             },
             React.DOM.p(null, 'Testing')
           );*/
  }
}

module.exports = Result;
       
