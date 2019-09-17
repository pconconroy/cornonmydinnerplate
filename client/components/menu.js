import React, {Component} from 'react'
import {Menu, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Meenu extends Component {
  render() {
    return (
      <div className="Menu">
        <Menu color="orange" text vertical>
          <Menu.Item header children className="menu-header">
            Corn On My Dinner Plate
          </Menu.Item>
          <Menu.Item>
            <Link to="/home">
              <Button>
                <p>Home</p>
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
              <Button>
                <p>About</p>
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/media"
              onClick={() => {
                // setTimeout(500, window.location.reload())
                this.setTimeout(500, window.location.reload())
              }}
            >
              <Button>
                <p>Media</p>
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/music">
              <Button>
                <p>Music</p>
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/merchandise">
              <Button>
                <p>Merchandise</p>
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/booking">
              <Button>
                <p>Booking</p>
              </Button>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Meenu
