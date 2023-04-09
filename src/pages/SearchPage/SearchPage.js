import React from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";
import logo from './assets/mission-safe-logo1.png'
import './SearchPage.scss'
import dateFormat from "dateformat";
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
        var results = [{fireID: 1, firstName: "first", lastName: "Test", email: "test1.com", programs: ["1","2","3"], active: true},
            {fireID: 2, firstName: "second", lastName: "Test", email: "test2.com", programs: ["1","2","3"], active: true}];
             //add results to youthResults
        this.setState({
            youthResults: results,
            formResults: [],
            eventResults: [],
            searchSummary: summary
        });
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
        var results = [{
            name: "Event 1",
            programs: ["1", "2", "3"],
            date: "01/01/2000",
            attended_youth: ["Youth1", "Youth2", "Youth3"],
            attached_forms: ["Form1", "Form2", "form3"],
            _id: 1
            },{
                name: "Event 2" ,
                programs: ["1","2","3"],
                date: "02/01/2001",
                attended_youth: ["Youth1", "Youth2", "Youth3"],
                attached_forms: ["Form1", "Form2", "form3"], 
                _id: 2
                }];
        
        //Filter by dates
        results=this.dateFilter(results,startTime,endTime);
        
        //set State
        this.setState({
            youthResults: [],
            formResults: [],
            eventResults: results,
            searchSummary: summary
        });
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
        var results = [{name: "Form 1" , _id: 1 , date: "01/01/2000", programs: ["1","2","3"], staff: "John"},
        {name: "Form 2" , _id: 2 , date: "02/01/2000", programs: ["1","2","3"], staff: "John"}]

        //Filter by dates
        results = this.dateFilter(results,startTime,endTime);

        this.setState({
            youthResults: [],
            formResults: results,
            eventResults: [],
            searchSummary: summary
        });
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

                <PDFDownloadLink document={<ReportGenerator youthResults={[1, 2, 3, 4]} formResults={this.state.formResults} eventResults={this.state.eventResults} />} fileName="FORM">
                    {({ loading }) =>
                        loading ? (
                            <button>Loading Document ...</button>
                        ) : (
                            <button>Download</button>
                        )
                    }

                </PDFDownloadLink>

            </div>
        )
    }
}

export default SearchPage;
