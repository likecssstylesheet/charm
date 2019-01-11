import { Carousel, WingBlank } from 'antd-mobile';
import React,{Component} from 'react'
class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: ['1', '2', '3','4'],
      imgHeight: 440,
    };
  }
  componentDidMount() {
    // simulate img loading
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
          dots={true}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          //afterChange={index => console.log('slide to', index)}
        >
          {this.props.data.map(val => (
          
              <img
                src={`${val.main_image}`}
                alt="aaa"
                style={{ width: '100%', verticalAlign: 'top' }}
                key={val}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: '440' });
                }}
              />
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default App;