import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 19px;
  background: ${({ primary }) => (primary ? '#128cff' : '#0054ff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px  48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
  font-size:${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-left: 25px;
  margin-right: 25px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#0054ff' : '#042062')};
    color: #fff;
  }
`