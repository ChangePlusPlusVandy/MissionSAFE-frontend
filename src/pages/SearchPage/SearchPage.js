import React from "react";
import Modal from "react-modal";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";
import logo from './assets/mission-safe-logo1.png'
import './SearchPage.scss'
import dateFormat from "dateformat";
class SearchPage extends React.Component {
    state = {
        youthResults: [],
        formResults: [],
        eventResults: [],
        date: dateFormat(new Date(), "fullDate"),
        searchSummary: "",
        showExportModal: false
    };

    toggleExportModal = () => {
        this.setState({
            showExportModal: !this.state.showExportModal
        })
    }

    exportResultsToPDF = () => {
        console.log("PDF export button clicked")
        // TODO: call the actual PDF generation code here
        // createPDF(this.state.youthResults, this.state.formResults, this.state.eventResults)
    }

    updateEventResults = (criteria, text) => {
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
        }, {
            name: "Event 2",
            programs: ["1", "2", "3"],
            date: "02/01/2000",
            attended_youth: ["Youth1", "Youth2", "Youth3"],
            attached_forms: ["Form1", "Form2", "form3"],
            _id: 2
        }]
        //set State
        this.setState({
            youthResults: [],
            formResults: [],
            eventResults: results,
            searchSummary: summary
        });
    }
    updateYouthResults = (criteria, text) => {
        //Call to backend for results later
        var summary = "Showing results";
        if (text.length > 0) {
            summary += " for \"" + text + "\""
        }
        if (criteria.length > 0) {
            summary += " by " + criteria
        }
        summary += " within Youth"
        //Dummy Results
        var results = [{ fireID: 1, firstName: "first", lastName: "Test", email: "test1.com", programs: ["1", "2", "3"], active: true },
        { fireID: 2, firstName: "second", lastName: "Test", email: "test2.com", programs: ["1", "2", "3"], active: true }];
        //add results to youthResults
        this.setState({
            youthResults: results,
            formResults: [],
            eventResults: [],
            searchSummary: summary
        });
    }
    updateFormResults = (criteria, text) => {
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
        var results = [{ name: "Form 1", _id: 1, date: "01/01/2000", programs: ["1", "2", "3"], staff: "John" },
        { name: "Form 2", _id: 2, date: "02/01/2000", programs: ["1", "2", "3"], staff: "John" }]
        this.setState({
            youthResults: [],
            formResults: results,
            eventResults: [],
            searchSummary: summary
        });
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
                        updateEventResults={this.updateEventResults} />
                    <button className="export-button" onClick={this.toggleExportModal}>Export Results to PDF</button>
                    <Modal isOpen={this.state.showExportModal} onRequestClose={this.toggleExportModal} appElement={document.getElementById('root')} className="export-modal">
                        <div className="column-container modal-container">
                            <h2 className="export-modal-header">Export Options</h2>
                            <p>Put export options here.</p>
                            <button className="export-button" onClick={this.exportResultsToPDF}>Export to PDF</button>
                        </div>
                    </Modal>
                </div >
                <div className="search-summary">
                    <p>{this.state.searchSummary}</p>
                </div>
                <div className='results-container'>
                    <SearchResults youthResults={this.state.youthResults} formResults={this.state.formResults} eventResults={this.state.eventResults} />
                </div>
            </div >
        )
    }
}

export default SearchPage;
