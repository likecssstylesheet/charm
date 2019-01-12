import { Carousel, WingBlank } from 'antd-mobile';
import React,{Component} from 'react'
import './index.scss'
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
  handleclick(data){
    this.props.ccc.history.push(`/brand/${data}`)
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
              <div className="banner" key={val.id} onClick={this.handleclick.bind(this,val.id)}>

                <img
                  src={`${val.main_image}`}
                  alt="aaa"
                  style={{ width: '100%', verticalAlign: 'top' }}
                  
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: '440' });
                  }}
                />
                {
                  <div>
                      <h2>{val.main_title}</h2>
                      <p>{val.sub_title}</p>
                      <p>{val.description}</p>
                  </div>
                }
              </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default App;