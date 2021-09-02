import styled, { css } from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.black};

  ${({ type, disabled }) => {
    if (disabled) {
      return css`
        background-color: rgba(255, 255, 255, 0.08);
      `;
    }

    if (type === 'filled') {
      return css`
        background-color: orange;
      `;
    }

    return css`
      background-color: black;
    `;
  }}
`;
