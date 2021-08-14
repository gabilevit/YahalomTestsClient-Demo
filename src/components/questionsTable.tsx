import React from "react";
import { Question } from "../services/questionService";

// tsx (typescript) functional component
export interface QuestionsTableProps {
  questions: Question[];
}

const QuestionsTable: React.FC<QuestionsTableProps> = (
  props: QuestionsTableProps
) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Question Type</th>
          </tr>
        </thead>
        <tbody>
          {props.questions.map((question) => (
            <tr key={question.Id}>
              <th scope="row">{question.Id}</th>
              <td>{question.Title}{question.Tags}</td>
              <td>{question.Type}</td>
              <td><button className="btn btn-primary btn-sm">Edit</button></td>
              <td><button className="btn btn-primary btn-sm">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
