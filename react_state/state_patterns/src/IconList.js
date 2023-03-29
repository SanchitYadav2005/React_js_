import React, {Component} from 'react';

class IconList extends Component{
    static defaultProps = {
        options: [
          "angry",
          "anchor",
          "archive",
          "at",
          "archway",
          "baby",
          "bell",
          "bolt",
          "bone",
          "car",
          "city",
          "cloud",
          "couch"
        ]
      };
    constructor(props){
        super(props);
        this.state = {icons: ['angry', 'baby']}
        this.getIcon = this.getIcon.bind(this);
    }
    getIcon(){
        let index = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[index];
        this.setState({icons:[...this.state.icons, newIcon]});
    }
    render(){
        const newIcons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
        return(
            <div>
                <h1>Icons: {newIcons}</h1>
                <button onClick={this.getIcon}>Get new icons</button>
            </div>
        )
    }
}

export default IconList;