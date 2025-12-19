import styled from 'styled-components'
import colors from '../../style/colors';

export const ButtonComponent = styled.button`
  width: 100%;
  height: 56px;

  border: none;
  border-radius: 999px;

  background-color: ${colors.button_primary};
  color: ${colors.white};

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.7;
  }

  &:disabled {
    background-color: ${colors.button_disabled};
    color: ${colors.hover};
    cursor: not-allowed;
    opacity: 1;
  }
`;

export const Loader = styled.span`
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: ${colors.white};
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;