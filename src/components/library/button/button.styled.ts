import styled from 'styled-components';

interface IStyledButtonProps {
	type?: 'submit' | 'reset' | 'button';
}

export const StyledButton = styled.button<IStyledButtonProps>`
	color: ${({ theme }) => theme.btnColor};
	min-width: 2.5rem;
	padding: 0.5rem;
	border: 2px solid black;
	margin: 0 0.5rem;
	border-radius: 0.125rem;
	box-shadow: none;
	transition: all 0.15s ease-in-out;

	&:hover {
		color: white;
		background: black;
	}
`;