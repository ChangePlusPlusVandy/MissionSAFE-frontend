import './SearchResults.scss'
import React from "react"
import YouthResult from "../../YouthResult/YouthResult";
import EventResult from "../../EventResult/EventResult";
import FormResult from "../../FormResult/FormResult";

class SearchResults extends React.Component {
    render() {
        if (this.props.youthResults.length > 0) {
            return (
                <div className="search-results">
                    {this.props.youthResults.map(youthResult => {
                        return <YouthResult key={youthResult.fireID} youth={youthResult}/>
                    })}
                </div>
            )
        } else if (this.props.eventResults.length() > 0) {
            return (
                <div className="search-results">
                    {this.props.eventResults.map(eventResult => {
                        return <EventResult key={eventResult._id} event={eventResult}/>
                    })}
                </div>
            )
        } else if (this.props.formResults.length() > 0) {
            return (
                <div className="search-results">
                    {this.props.formResults.map(formResult => {
                        return <FormResult key={formResult._id} form={formResult}/>
                    })}
                </div>
            )
        } else {
            return (
                <div className="search-results">
                    <p className="empty-message">There are no results to display.</p>
                </div>
            )
        }
    }
}export default SearchResults;