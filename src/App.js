import React from "react";
import photo from './photo.jpg'
class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {Person :{ fullName:"Rihab Aidi",
                            bio:"Tunisian, business computing student, 22 years old,baccalaureate economy 2019",
                            imgSrc:<img src={photo} alt='photo' style={{width:'35%' ,height:'500px' ,borderRadius:'50%'}}/>,
                            profession:"business computing student"}, 
                  show: false ,
                  count: 0
                   }
  }
 
  render() { 
    console.log(this.state.show)
    console.log(this.state.Person.imgSrc)

    return ( <div>
     
    
      <button onClick={()=>this.setState({show:!this.state.show})} style={{width:'5%' ,height:'30px' ,borderRadius:'4px',border: "none",backgroundColor: "#008CBA",color: "white"}}>{this.state.show ? 'Hide':'Show'}</button>
     
      {
        this.state.show &&( 
          <center>
            {this.state.Person.imgSrc}
          <h2>{this.state.Person.fullName}</h2>
          <h4>{this.state.Person.profession}</h4>
          <p>{this.state.Person.bio}</p>
          {this.state.count}
          </center>
          

        )
      }
    </div> );
  }

componentDidMount(){
  setInterval(() => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  }, 1000);
  }



}
 
export default App;