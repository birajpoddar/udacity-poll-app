import Login from './Login';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../app/store';

describe('Login.js Tests', () => {
	it('All required elements exists', () => {
		const view = render(
			<MemoryRouter>
				<Provider store={store}>
					<Login />
				</Provider>
			</MemoryRouter>
		);

		expect(view.getByTestId('inputUser')).toBeInTheDocument();
		expect(view.getByTestId('inputPass')).toBeInTheDocument();
		expect(view.getByTestId('buttonLogin')).toBeInTheDocument();
	});

	it('Invalid creds produce error', (done) => {
		const view = render(
			<MemoryRouter>
				<Provider store={store}>
					<Login />
				</Provider>
			</MemoryRouter>
		);

		const user = view.getByTestId('inputUser');
		fireEvent.change(user, { target: { value: 'abc' } });

		const pass = view.getByTestId('inputPass');
		fireEvent.change(pass, { target: { value: '123' } });

		const login = view.getByTestId('buttonLogin');
		fireEvent.click(login);

		setTimeout(() => {
			const validation = view.getByTestId('validationMessage');
			expect(validation).toBeInTheDocument();
			expect(validation.innerText).toEqual(
				`Credentials doesn't match. Please try again.`
			);
			done();
		}, 2000);
	});
});
