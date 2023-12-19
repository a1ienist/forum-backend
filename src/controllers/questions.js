import Question from '../models/Question.js';

 const GET_QUESTION = async (req, res) => {
  const questions = await Question.find();
  res.json(questions);
};

 const POST_QUESTION = async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.json(question);
};

 const DELETE_QUESTION = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.json({ message: 'Question deleted' });
};

export {GET_QUESTION, POST_QUESTION, DELETE_QUESTION,};