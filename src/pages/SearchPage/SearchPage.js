import React from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";

class SearchPage extends React.Component {
    // constructor(props) {
    //     super(props);
    
        state = {
            //Defaults for search for, search by, and text-search
        //   youthResults: [{
        //     fireID: 2, firstName: "Test", lastName: "Youth", email: "Test", programs: ["1","2","3"], active: true
        // }],
        //   formResults: [{
        //     date: "Today", programs: ["1","2","3"]
        //   }],
        //   eventResults: [{
        //     programs: ["1","2","3"],
        //     attended_youth: ["Youth1", "Youth2", "Youth3"],
        //     attached_forms: ["Form1", "Form2", "form3"]
        //   }]
        youthResults: [],
        formResults: [],
        eventResults: []
        };
      
    updateEventResults = (criteria, text) =>{
        //call backend for real results later
        
        //dummy results
        var results = [{
            programs: ["1","2","3"],
            date: "01/01/2000",
            attended_youth: ["Youth1", "Youth2", "Youth3"],
            attached_forms: ["Form1", "Form2", "form3"]
            }]
        //set State
        this.setState({
            youthResults: [],
            formResults: [],
            eventResults: results
            });
    }
    updateYouthResults = (criteria, text) => {
        //Call to backend for results later
        //Dummy Results
        var results = [{fireID: 1, firstName: "first", lastName: "Test", email: "test1.com", programs: ["1","2","3"], active: true},
        {fireID: 2, firstName: "second", lastName: "Test", email: "test2.com", programs: ["1","2","3"], active: true}];
             //add results to youthResults
        this.setState({
            youthResults: results,
            formResults: [],
            eventResults: []
        });
    }
    updateFormResults = (criteria, text) =>{
        //Call to backend for results later
        //Dummy Results
        var results = [{date: "01/01/2000", programs: ["1","2","3"]}]
        this.setState({
            youthResults: [],
            formResults: results,
            eventResults: []
        });
    }
    render() {
        return (

            <div className="column-container">
                <p>Welcome to MissionSAFE</p>
                <SearchBar updateYouthResults = {this.updateYouthResults} updateFormResults = {this.updateFormResults}
                 updateEventResults = {this.updateEventResults}/>
                <SearchResults youthResults = {this.state.youthResults}  formResults = {this.state.formResults} eventResults = {this.state.eventResults}/>
            </div>
        )
    }
}

export default SearchPage;
