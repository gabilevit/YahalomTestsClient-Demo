import http from "./httpService";

export interface Question {
  Id: number;
  Type: string;
  Title: string;
  Tags: [];
}

const serverRoute = "/api/Questions/";

const QuestionService = {
  async getAllQuestions() {
    return await http.get(serverRoute + "getQuestions");
  },

  async addQuestion(question: any) {
    return await http.post(serverRoute + "addQuestion", question);
  },

  async removeQuestion(question: any) {
    return await http.post(serverRoute + "removeQuestion", question);
  }
};

export default QuestionService;
