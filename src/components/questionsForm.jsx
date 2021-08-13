import { Component } from "react";

// jsx class component
class QuestionsForm extends Component {
  state = { type: "", title: "", errors: {}, correctAns: "", answer1: "", answer2: "", answer3: "", answer4: "", };

  handleType = async (e) => {
    await this.setState({ type: e.currentTarget.value, errors: {} });
    console.log(this.state.type)
  }

  handleChange = (e) => {
    this.setState({ title: e.currentTarget.value, errors: {} });
  };

  handleCorrectAnswerChange = async (e) => {
    //if(e.currentTarget.value.trim() === "") errors.answer = "No answer!";
    await this.setState({ correctAns: e.currentTarget.value, errors: {} });
    console.log(this.state.correctAns);
  }

  handleAnswer1Change = (e) => {
    this.setState({ answer1: e.currentTarget.value, errors: {} });
  }

  handleAnswer2Change = (e) => {
    this.setState({ answer2: e.currentTarget.value, errors: {} });
  }

  handleAnswer3Change = (e) => {
    this.setState({ answer3: e.currentTarget.value, errors: {} });
  }

  handleAnswer4Change = (e) => {
    this.setState({ answer4: e.currentTarget.value, errors: {} });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const questionToAdd = { Title: this.state.title, CorectAns: this.state.correctAns, Answer1: this.state.answer1, Answer2: this.state.answer2, Answer3: this.state.answer3, Answer4: this.state.answer4 };
    this.props.onAddQuestion(questionToAdd);
    this.setState({ title: "" });
  };

  validate = () => {
    const errors = {};
    if (this.state.title.trim() === "") errors.title = "Title is required.";
    if (this.state.answer1.trim() === "") errors.answer1 = "Answer 1 is required.";
    if (this.state.answer2.trim() === "") errors.answer2 = "Answer 2 is required.";
    if (this.state.answer3.trim() === "") errors.answer3 = "Answer 3 is required.";
    if (this.state.answer4.trim() === "") errors.answer4 = "Answer 4 is required.";
    if (this.state.correctAns.trim() === "") errors.correctAns = "You didnt pick a corrent answer.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { type, title, errors, answer1, answer2, answer3, answer4 } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group space">
            <label htmlFor="type">Question type:</label>
            <select id="type" className="input form-control" onChange={this.handleType}>
              <option value={type} >Single answer option</option>
              <option value={type}>Multible answer option</option>
            </select>
          </div>
          <div className="form-group space">
            <label htmlFor="title">Title: </label>
            <input
              value={title}
              onChange={this.handleChange}
              id="title"
              type="text"
              className="input form-control"
            />
            {errors.title && (
              <div className="alert alert-danger">{errors.title}</div>
            )}
          </div>
          <div className="form-group space">
            <input
              value={answer1}
              onChange={this.handleCorrectAnswerChange}
              id="correctAnswer"
              type="checkbox"
              className="input form-control"
            />
            <input
              value={answer1}
              onChange={this.handleAnswer1Change}
              id="answer"
              type="text"
              className="input form-control"
            />
            {errors.answer1 && (
              <div className="alert alert-danger">{errors.answer1}</div>
            )}
          </div>
          <div className="form-group space">
            <input
              value={answer2}
              onChange={this.handleCorrectAnswerChange}
              id="correctAnswer"
              type="checkbox"
              className="input form-control"
            />
            <input
              value={answer2}
              onChange={this.handleAnswer2Change}
              id="answer"
              type="text"
              className="input form-control"
            />
            {errors.answer2 && (
              <div className="alert alert-danger">{errors.answer2}</div>
            )}
          </div>
          <div className="form-group space">
            <input
              value={answer3}
              onChange={this.handleCorrectAnswerChange}
              id="correctAnswer"
              type="checkbox"
              className="input form-control"
            />
            <input
              value={answer3}
              onChange={this.handleAnswer3Change}
              id="answer"
              type="text"
              className="input form-control"
            />
            {errors.answer3 && (
              <div className="alert alert-danger">{errors.answer3}</div>
            )}
          </div>
          <div className="form-group space">
            <input
              value={answer4}
              onChange={this.handleCorrectAnswerChange}
              id="correctAnswer"
              type="checkbox"
              className="input form-control"
            />
            <input
              value={answer4}
              onChange={this.handleAnswer4Change}
              id="answer"
              type="text"
              className="input form-control"
            />
            {errors.answer4 && (
              <div className="alert alert-danger">{errors.answer4}</div>
            )}
          </div>
          {errors.correctAns && (
            <div className="alert alert-danger">{errors.correctAns}</div>
          )}
          <button className="btn btn-primary btn-sm">Add question</button>
        </form>
      </div>
    );
  }
}

export default QuestionsForm;
