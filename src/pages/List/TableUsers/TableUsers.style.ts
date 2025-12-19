import styled from "styled-components";
import colors from "../../../style/colors";

export const Table = {
  Container: styled.div`
    width: 100%;
    overflow-x: auto;
    background: ${colors.white};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin: 2rem 0;
  `,

  Element: styled.table`
    width: 100%;
    border-collapse: collapse;

    @media(min-width: 768px) {
      min-width: 600px;
    }
  `,

  Thead: styled.thead`
    background-color: ${colors.table_head};
  `,

  Th: styled.th`
    padding: 12px 16px;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${colors.font_table_head};

    @media(min-width: 768px) {
      border-bottom: 1px solid ${colors.table_border};
    }

    @media(max-width: 768px) {
      display: none;
    }
  `,

  Td: styled.td`
    padding: 12px 16px;
    font-size: 0.9rem;
    color: ${colors.font_table};

    &::before {
      @media(max-width: 768px) {  
        content: attr(data-cell);
        font-weight: 600;
        text-transform: capitalize;
      }
    }

    @media(min-width: 768px) {
      border-bottom: 1px solid ${colors.table_border};;
    }

    @media(max-width: 768px) {
      display: grid;
      grid-template-columns: 5rem auto;
      padding: 1rem 1rem 0 1.5rem;

      &:last-child {
        display: flex;
        justify-content: end;
        padding: 0 1rem 1rem 0;
      }
    }
  `,

  Tr: styled.tr`
    @media(max-width: 768px) {
      padding: 1rem;
      border-bottom: 1px solid ${colors.table_border};
    }

    &:hover {
      background-color: ${colors.light_hover};
    }

    &:last-child td {
      border-bottom: none;
    }
  `,
};

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;

  svg {
    cursor: pointer;
  }
`