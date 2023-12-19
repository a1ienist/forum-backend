import Answer from '../models/Answer';

const GET_ANSWERS = async (req, res) => {
  const answers = await Answer.find({ question_id: req.params.id });
  res.json(answers);
};

const POST_ANSWER = async (req, res) => {
  const answer = new Answer({ ...req.body, question_id: req.params.id });
  await answer.save();
  res.json(answer);
};

const DELETE_ANSWER = async (req, res) => {
  await Answer.findByIdAndDelete(req.params.id);
  res.json({ message: 'Answer deleted' });
};

export {GET_ANSWERS, POST_ANSWER, DELETE_ANSWER};
