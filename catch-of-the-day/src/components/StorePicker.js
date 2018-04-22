import React, { Component, Fragment } from 'react'

class StorePicker extends Component {
    render() {
        return (
            <Fragment>
                { /* comment */ }
                <form className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" placeholder="Store Name" required="" />
                    <button type="submit">Visit Store &#x2192;</button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker
