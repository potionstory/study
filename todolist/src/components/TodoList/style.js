import styled from "styled-components";

export const TodoListWrap = styled.div`
  width: 600px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const TodoListHeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 20px;
  h1 {
    font-size: 32px;
  }
  ul {
    display: flex;
    gap: 0 10px;
    list-style: none;
    li {
    }
  }
`;

export const TodoListBodyWrap = styled.div`
  overflow-y: auto;
  max-height: 490px;
  padding: 20px;
  border-top: 1px solid #efefef;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    list-style: none;
    li {
      display: flex;
      gap: 0 10px;
      position: relative;
      input[type="checkbox"] {
        display: none;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
      }
      label {
        flex: 1;
        overflow: hidden;
        padding-left: 50px;
        font-size: 16px;
        line-height: 40px;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        &:after {
          content: "";
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #3d6aff;
          box-sizing: border-box;
        }
      }
      input[type="checkbox"]:checked + label {
        color: #aaa;
        text-decoration: line-through;
        &:after {
          content: "✔";
          background-color: #3d6aff;
          color: white;
        }
      }
      button {
        display: none;
        padding: 0 20px;
        border: 0;
        border-radius: 4px;
        background-color: #e35131;
        color: white;
        opacity: 0.6;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
      &:hover {
        button {
          display: block;
        }
      }
    }
  }
  .empty {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
`;

export const TodoListFooterWrap = styled.div`
  display: flex;
  gap: 0 10px;
  padding: 20px;
  border-top: 1px solid #efefef;
  input {
    flex: 1;
    height: 40px;
    padding: 10px;
    border: 1px solid #efefef;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const TodoListFooterButton = styled.button`
  padding: 0 20px;
  border: 0;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? "#3d6aff" : "#efefef")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
