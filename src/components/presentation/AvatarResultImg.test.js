import { render } from '@testing-library/react';
import AvatarResultImg from './AvatarResultImg';

describe('AvatarResultImg Tests', () => {
	it('Snapshot Test with props', () => {
		const view = render(
			<AvatarResultImg
				user={{
					name: 'Zenobia Oshikanlu',
					avatar:
						'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=facearea&facepad=3',
				}}
			/>
		);
		expect(view).toMatchSnapshot();
	});

	it('Snapshot Test without props', () => {
		const view = render(<AvatarResultImg user={{}} />);
		expect(view).toMatchSnapshot();
	});
});
