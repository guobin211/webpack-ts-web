/**
 * home.page
 */
import React, { Component } from "react";
import "./home.scss";
import { UseHooksComponent } from "../../components/use-hooks/use-hooks.component";

class HomePage extends Component {
  state = {
    value: "234",
  };

  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    console.log("parent handleSubmit", this.state.value);
  }

  handleChange(value: string) {
    console.log("parent handleChange", value);
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div className="home-page">
        ReactPage 测试hot-8888
        <UseHooksComponent
          defaultValue="234"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default HomePage;
