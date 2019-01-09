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
            <a
              key={val}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              className="swipe"
            >
              <img
                src={`${val.bigImgUrl}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: '440' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default App;