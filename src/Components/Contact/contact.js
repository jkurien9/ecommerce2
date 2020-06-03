import React from "react";
const defaultState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
};

class Form extends React.Component {
  state = defaultState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "Please fill out your Name";
    }

    if (!this.state.email.includes("@")) {
      emailError = "This email is not valid!";
    }

    if (nameError || emailError) {
      this.setState({ nameError, emailError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //Clearing form
    this.setState(defaultState);
    }
  };
  render() {
    return (
      <div>
        <header className="header">
                    <img className="logo" src="imgs/facemask.jpeg" alt="logo" /><a href=""></a>
                    <ul className="nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </header>
                <img className="skyline" src="imgs/contacthero.jpeg" alt="skyline" />
                <img className="hidden" src="imgs/facemask.jpeg" alt="hidden" />
                <div className="showcase container">
            <h2 className="text-primary">Contact Us</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="forminput">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="First & Last"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <div className="validate">{this.state.nameError}</div>
              </div>
​
              <div className="forminput">
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div className="validate">{this.state.emailError}</div>
              </div>
              <div className="forminput">
                <label for="message">Message</label>
                <textarea
                  placeholder="Please provide us with your feedback!"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
      </div>
    );
  }
}

export default Form;
