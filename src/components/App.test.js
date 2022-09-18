import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import { loadData } from '../actions/shared';
import { logoutUser } from '../actions/authedUser';

describe('App Rendering tests', () => {
	beforeAll(async () => {
		await store.dispatch(loadData());
	});

	it('Valid creds navigates to dashboard', (done) => {
		const view = render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		);

		const user = view.getByTestId('inputUser');
		fireEvent.change(user, { target: { value: 'mtsamis' } });

		const pass = view.getByTestId('inputPass');
		fireEvent.change(pass, { target: { value: 'xyz123' } });

		const login = view.getByTestId('buttonLogin');
		fireEvent.click(login);

		setTimeout(() => {
			const header = view.getByTestId('header');
			expect(header).toBeInTheDocument();
			done();
		}, 3000);
	});

	it('Checks 4 Links are available on Header', () => {
		const view = render(
			<MemoryRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</MemoryRouter>
		);

		const header = view.getByTestId('header');
		expect(header).toBeInTheDocument();
		expect(header.querySelectorAll('a').length).toEqual(4);
	});

	afterAll(() => {
		store.dispatch(logoutUser());
	});
});
