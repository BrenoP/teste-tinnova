import styled from "styled-components";

export const Table = {
  Container: styled.div`
    width: 100%;
    overflow-x: auto;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin: 2rem 0;
  `,

  Element: styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  `,

  Thead: styled.thead`
    background-color: #f9fafb;
  `,

  Th: styled.th`
    padding: 12px 16px;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
  `,

  Td: styled.td`
    padding: 12px 16px;
    font-size: 0.9rem;
    color: #4b5563;
    border-bottom: 1px solid #f1f5f9;
  `,

  Tr: styled.tr`
    &:hover {
      background-color: #f8fafc;
    }

    &:last-child td {
      border-bottom: none;
    }
  `,
};