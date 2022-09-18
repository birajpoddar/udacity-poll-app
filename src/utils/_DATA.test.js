import * as _DATA from './_DATA';

describe('_DATA.js Tests', () => {
	it('Save Question succeds when valid input passed', async () => {
		const validQuesAns = {
			optionOneText: 'Drink Pepsi',
			optionTwoText: 'Drink Coke',
			author: 'sarahedo',
		};

		const formattedQues = await _DATA._saveQuestion(validQuesAns);
		expect(formattedQues).toBeDefined();
		expect(formattedQues.id).toBeDefined();
		expect(formattedQues.timestamp).toBeDefined();
		expect(formattedQues.author).toEqual(validQuesAns.author);
		expect(formattedQues.optionOne).toBeDefined();
		expect(formattedQues.optionOne.votes).toEqual([]);
		expect(formattedQues.optionOne.votes.length).toEqual(0);
		expect(formattedQues.optionOne.text).toEqual(validQuesAns.optionOneText);
		expect(formattedQues.optionTwo).toBeDefined();
		expect(formattedQues.optionTwo.votes).toEqual([]);
		expect(formattedQues.optionTwo.votes.length).toEqual(0);
		expect(formattedQues.optionTwo.text).toEqual(validQuesAns.optionTwoText);
	});

	it('Save Question fails when invalid input passed', async () => {
		const invalidQues = {
			optionOneText: '',
			optionTwoText: 'Drink Coke',
			author: 'sarahedo',
		};

		await expect(_DATA._saveQuestion(invalidQues)).rejects.toEqual(
			'Please provide optionOneText, optionTwoText, and author'
		);
	});

	it('Save QuestionAnswer succeds when valid input passed', async () => {
		const validQuesAns = {
			qid: 'vthrdm985a262al8qx3do',
			authedUser: 'sarahedo',
			answer: 'optionOne',
		};

		const result = await _DATA._saveQuestionAnswer(validQuesAns);
		expect(result).toBeDefined();
		expect(result).toEqual(true);
	});

	it('Save QuestionAnswer fails when invalid input passed', async () => {
		const invalidQuesAns = {
			qid: '',
			authedUser: 'sarahedo',
			answer: 'Drink Coke',
		};

		await expect(_DATA._saveQuestionAnswer(invalidQuesAns)).rejects.toEqual(
			'Please provide authedUser, qid, and answer'
		);
	});
});
