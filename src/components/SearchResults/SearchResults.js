import './SearchResults.scss'
import React from "react"
import YouthResult from "../../YouthResult/YouthResult";
import EventResult from "../../EventResult/EventResult";
import FormResult from "../../FormResult/FormResult";

class SearchResults extends React.Component {
    render() {
        if (this.props.youthResults.length() !== 0) {
            return (
                //need to send this.props.youthResults to <YouthResult> component?
                <div className='display'>
                    <YouthResult> </YouthResult>
                </div>

            )
        } else if(this.props.eventResults.length() !== 0) {
            return (
                <div className='display'>
                    <EventResult> </EventResult>
                </div>
            )
        } else if(this.props.formResults.length() !== 0) {
            return (
                <div className='display'>
                    <FormResult> </FormResult>
                </div>
            )
        }
    }
}export default SearchResults;