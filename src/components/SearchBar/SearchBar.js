import './SearchBar.scss'
import React from "react"

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            //Defaults for search for, search by, and text-search
          category: "Youth",
          criteria: "",
          text: ""
        };
      }
    updateResults(){
        //Calls correct update function based on what user is searching for
        switch(this.state.category){
            case "Youth":
                
                this.props.updateYouthResults();
                break;
            case "Form":
                // console.log("Called form" + this.state.criteria + " " + this.state.text);
                this.props.updateFormResults();
                 break;
            case "Event":
                // console.log("Called event" + this.state.criteria + " " + this.state.text);
                this.props.updateEventResults();
                break;
        }
    }
    render() {
        return(
        <div className = 'search-container'>
            {/* <img className = 'search-icon' src = {search_icon} alt = "search" height = "50"/> */}

            {/* Select what you are searching for: Forms, Events, or Youth */}
            <label htmlFor = 'dropdown'>Search For:</label>
            <select id = 'dropdown' className = 'search-for' value = {this.state.category}  onChange={(e)=>{
                this.setState({category: e.target.value , criteria: ""}, () => {
                    this.updateResults();
                });
               
                }}>
            <option value = "Youth">Youth</option>
            <option value = "Form">Form</option>
            <option value = "Event">Event</option>
            </select>

              {/* if Search for youth: search by email, program, or ID */}  
            {
            this.state.category === "Youth" &&
            <div>
            <label htmlFor = 'dropdown'>By:</label>
             <select id = 'dropdown' className = 'search-by' value = {this.state.criteria}  onChange={(e)=>{
                this.setState({criteria: e.target.value}, this.updateResults);
                }}>
            <option value = "Email">Email</option>
            <option value = "Program">Program</option>
            <option value = "ID">Youth ID</option>
            </select>
            </div>
            }
            {/* if Search for Form or event: search by Youth ID or Event Code*/}  
             {(this.state.category === "Form" || this.state.category === "Event")   &&
             <div>
             <label htmlFor = 'dropdown'>By:</label>
             <select id = 'dropdown' className = 'search-by' value = {this.state.criteria}  onChange={(e)=>{
                this.setState({criteria: e.target.value}, this.updateResults);
                }}>
            <option value = ""></option>
            <option value = "ID">Youth ID</option>
            <option value = "Event-Code">Event Code</option>
            </select>
            </div>
            }
            <input type='text' className='text-search' onChange={(e)=>{
                this.setState({text: e.target.value}, this.updateResults);
            }}/>   
        </div>
        );
    }
}export default SearchBar;