import './SearchBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import React from "react"


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Defaults for search for, search by, and text-search
            category: "Youth",
            criteria: "",
            text: "",
            startDate: 0,
            endDate: 0
        };
    }
    
    componentDidMount() {
        this.props.updateYouthResults("","");
      }

    updateResults() {
        //Convert Dates to milliseconds since 1980 or 0 if date is invalid
        let startTime=new Date(this.state.startDate).getTime();
                if (!startTime){
                    startTime=0;
                }
        let endTime=new Date(this.state.endDate).getTime();
                if (!endTime){
                    endTime=0;
                }
        //Calls correct update function based on what user is searching for
        switch (this.state.category) {
            case "Youth":
                this.props.updateYouthResults(this.state.criteria, this.state.text);
                break;
            case "Form":
                this.props.updateFormResults(this.state.criteria, this.state.text,startTime,endTime);
                break;
            case "Event":
                this.props.updateEventResults(this.state.criteria, this.state.text, startTime, endTime);
                break;
            default:
                console.log("Error: Invalid category");
                break;
        }
    }
    render() {
        return (
            <div className='search-container'>
                <input type='text' className='text-search'  onChange={(e) => {
                    this.setState({ text: e.target.value }, this.updateResults)}}/>
                <div className='both-dropdowns'>
                    <div>
                    <label htmlFor='dropdown'>For:</label>
                    <select id='dropdown' className='search-for' value={this.state.category} onChange={(e) => {
                        this.setState({ category: e.target.value, criteria: "ID" }, () => {
                            this.updateResults()
                        });
                    }}>
                        <option value="Youth">Youth</option>
                        <option value="Form">Form</option>
                        <option value="Event">Event</option>
                    </select>

                    </div>
                {/* if Search for youth: search by email, program, or ID */}
                {
                    this.state.category === "Youth" &&
                    <div>
                        <label htmlFor='dropdown'>By:</label>
                        <select id='dropdown' className='search-by' value={this.state.criteria} onChange={(e) => {
                            this.setState({ criteria: e.target.value }, this.updateResults);
                        }}>
                            <option value=""></option>
                            <option value="Email">Email</option>
                            <option value="Program">Program</option>
                            <option value="ID">Youth ID</option>
                        </select>
                    </div>
                }
                {/* if Search for Form or event: search by Youth ID or Code*/}
                {(this.state.category === "Form" || this.state.category === "Event") &&
                    <div className='form-event-row'>
                        <label htmlFor='dropdown'>By:</label>
                        <select id='dropdown' className='search-by' value={this.state.criteria} onChange={(e) => {
                            this.setState({ criteria: e.target.value }, this.updateResults);
                        }}>
                            <option value="ID">Youth ID</option>
                            <option value="Event-Code">Event Code</option>
                        </select>
                    
                        <div className='date-header'>From:</div>
                        <input className='date-picker' type='date' value={this.state.startDate} onChange={(e) => {
                            //is date valid
                            Date.parse(e.target.value)?
                            //set state
                            this.setState({ startDate: e.target.value }, this.updateResults)
                            //otherwise log error
                            :this.setState({ startDate: "" }, this.updateResults);  
                        }}/>
                        <div className='date-header'>To:</div>
                        <input className='date-picker' type='date' value={this.state.endDate} onChange={(e) => {
                            //is date valid
                            Date.parse(e.target.value)?
                            //set state
                            this.setState({ endDate: e.target.value }, this.updateResults)
                            //otherwise log error
                            :this.setState({ endDate: "" }, this.updateResults);  }}/>
                    </div>}
                </div>
            </div>
        );
    }
} export default SearchBar;