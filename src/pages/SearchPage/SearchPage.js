import React from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";
import logo from './assets/mission-safe-logo1.png'
import './SearchPage.scss'
import dateFormat from "dateformat";
import * as serverUtils from '../../util/ServerInterfaceYouth';
import {getEvent} from '../../util/ServerInterfaceEvents';
import ReportGenerator from "../../components/ReportGenerator";
import { PDFDownloadLink } from "@react-pdf/renderer";

class SearchPage extends React.Component {
    state = {
        youthResults: [],
        formResults: [],
        eventResults: [],
        date: dateFormat(new Date(), "fullDate"),
        searchSummary: ""
        };
    
    updateYouthResults = (criteria, text) => {
        //Call to backend for results later
        var summary = "Showing results";
        if (text.length>0){
            summary+=" for \"" + text + "\""
        }
        if (criteria.length>0){
            summary+=" by " + criteria
        }
        summary+=" within Youth"
        //Dummy Results
        let promise;
        switch (criteria){
            case "":
                promise = serverUtils.getAllYouth();
                break;
            case "Email":
                promise = serverUtils.getYouthByEmail(text);
                break;
            case "Program":
                promise = serverUtils.getAllYouthInProgram(text);
                break;
            case "ID":
                promise = serverUtils.getYouthByFireID(text);
                break;
            default:
                console.log("unrecognized path");
                break;
        }
        if (promise){
            promise.then(
                (result) => {
                //add results to youthResults
                this.setState({
                    youthResults: result,
                    formResults: [],
                    eventResults: [],
                    searchSummary: summary
                });
                },
                (error) => {
                    //log error on failure
                    console.error(`Error: ${error.message}`);
                },
            );  
        } 
    }

    updateEventResults = (criteria, text, startTime, endTime) =>{
        //call backend for real results later
        var summary = "Showing results";
        if (text.length > 0) {
            summary += " for \"" + text + "\""
        }
        if (criteria.length > 0) {
            summary += " by " + criteria
        }
        summary += " within Events"
        //dummy results
        let promise;
        switch (criteria){
            case "ID":
                promise = serverUtils.getEventsByFireID(text);
                break;
            case "Event-Code":
                promise = getEvent(text);
                break;
            default:
                console.log("Unexpected search criteria");
                break;
        }
        if (promise){
            promise.then(
                (result) => {
                    //add results to eventResults
                    this.setState({
                        youthResults: [],
                        formResults: [],
                        eventResults: this.dateFilter(result,startTime,endTime),
                        searchSummary: summary
                    });
                },
                (error) => {
                    //log error on failure
                    console.error(`Error: ${error.message}`);
                },
            ); 
        } 
    }
   
    updateFormResults = (criteria, text,startTime, endTime) =>{
        //Call to backend for results later
        var summary = "Showing results";
        if (text.length > 0) {
            summary += " for \"" + text + "\""
        }
        if (criteria.length > 0) {
            summary += " by " + criteria
        }
        summary += " within Forms"
        //Dummy Results
        let promise;
        switch (criteria){
            case "ID":
                promise = serverUtils.getFormsByFireID(text);
                break;
            case "Event-Code":
                //Uncomment this code if getFormsByEventCode is implemented
                // promise = getFormsByEventCode(text);

                break;
            default:
                console.log("Unexpected search criteria");
                break;
        }
        if (promise){
            promise.then(
                (result) => {
                    //add results to eventResults
                    this.setState({
                        youthResults: [],
                        formResults: this.dateFilter(result,startTime,endTime),
                        eventResults: [],
                        searchSummary: summary
                    });
                },
                (error) => {
                    //log error on failure
                    console.error(`Error: ${error.message}`);
                },
            );  
        }
    }

    dateFilter = (results,startTime,endTime) =>{
        function checkStartDate(result){
            return new Date(result.date).getTime() >= startTime;
        }
        function checkEndDate(result){
            return new Date(result.date).getTime() <= endTime;
        }

        if (startTime > 0){
            results= results.filter(checkStartDate);
        }
        if (endTime > 0){
            endTime += (1000*60*60*24);
            results= results.filter(checkEndDate);
        }
        return results;
    }
    

    render() {
        return (
            <div className="column-container">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className='bar-container'>
                    <h1 className="date">{this.state.date}</h1>
                    <SearchBar updateYouthResults={this.updateYouthResults} updateFormResults={this.updateFormResults}
                        updateEventResults={this.updateEventResults} 
                        />
                </div>
                <div className="search-summary">
                    <p>{this.state.searchSummary}</p>
                </div>
                <div className='results-container'>
                    <SearchResults youthResults={this.state.youthResults} formResults={this.state.formResults} eventResults={this.state.eventResults} />
                </div>

                {/* In Progress */}

                {/* <PDFDownloadLink document={<ReportGenerator youthResults={[1, 2, 3, 4]} formResults={this.state.formResults} eventResults={this.state.eventResults} />} fileName="FORM">
                    {({ loading }) =>
                        loading ? (
                            <button>Loading Document ...</button>
                        ) : (
                            <button>Download</button>
                        )
                    }

                </PDFDownloadLink> */}

            </div>
        )
    }
}

export default SearchPage;
