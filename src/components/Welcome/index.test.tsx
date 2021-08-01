import { render } from '@testing-library/react';

import Welcome from './';

describe('Welcome', () => {
	it('renders', () => {
		const { container } = render(<Welcome />);

		expect(container).toMatchSnapshot();
	});
});
