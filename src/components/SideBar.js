import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';


class FormListings extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      location: '',
      phone_number: '',
      email: '',
      user_name: ''
    };

    this.state = this.initialState;
  }

  submitForm = (ev) => {
    if(ev && ev.preventDefault) { ev.preventDefault() };
    this.props.handleSubmit(this.state);
    this.setState(this.initialState)
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      title,
      description,
      start_date,
      end_date,
      location,
      phone_number,
      email,
      user_name
    } = this.state;

    return (
    <div className='menu-1'>
      <Menu customBurgerIcon={ <img src="./plus.png" alt="Add Post" /> } >
        <form>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <label>Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <label>Start Date</label>
          <input
            type="text"
            id="start_date"
            name="start_date"
            value={start_date}
            onChange={this.handleChange}
          />
          <label>End Date</label>
          <input
            type="text"
            id="end_date"
            name="end_date"
            value={end_date}
            onChange={this.handleChange}
          />
          <label>Listing Type
          <select
            id="listing_type"
            name="listing_type"
            onChange={this.handleChange}
            native defaultValue='none'
          >
          <option value="none" disabled>
              Select Listing Type
            </option>
          <option value="Need">Need</option>
          <option value="Support">Support</option>
          </select>
          </label>
          <label>Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={this.handleChange}
          />
          <label>Phone Number</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={phone_number}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Postee</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={user_name}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            id="submit"
            value="submit"
            onClick={this.submitForm}
          />
        </form>
      </Menu>
    </div>
    );
  }
}

export default FormListings;
