import styled from "styled-components";

export const TodoWorkinContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  min-height: 100px;

  .workingContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    .empty-container {
      color: #eee;
      width: 100%;
      display: flex;
      min-height: 100px;
      align-items: center;
      justify-content: center;
    }
    .todoCardContainer {
      /* display: flex; */
      width: 25%;
      padding: 5px 5px;
      /* align-items: center; */
      /* justify-content: center; */

      .todoPaddingDiv {
        width: 100%;
        position: relative;
        padding: 15px;
        border: 2px solid #eee;
        border-radius: 5px;
        /* height: 100%; */
        transition: all 0.1s;
        cursor: pointer;
        .todoWorkingDiv {
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
          justify-content: space-between;

          .todoDelBtn {
            display: flex;
            width: 20px;
            height: 20px;
            border: none;
            padding-right: 10px;
            padding-left: 10px;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            background-color: #ff839a;
            font-size: 9px;
            text-align: center;
            font-size: 0.5rem;
          }
          .todoName {
            max-width: 50%;
            border: 1px none #000;
            padding: 0 10px;
            background-color: transparent;
            overflow: scroll;
            text-align: center;
            white-space: nowrap;
            border: 1px none #000;
            background-color: transparent;
            text-align: center;
            flex-grow: 3;
          }
          .todoIsdoneBtn {
            /* margin-right: 2px;
            margin-left: 2px; */
            padding: 5px 12px;
            border-radius: 5px;
            font-size: 0.5rem;
            background-color: #87d570;
            border: none;
            color: #fff;
          }
        }
        .todoDesc {
          overflow: scroll;
          white-space: pre-line;
          padding-top: 30px;
          width: 100%;
          height: auto;
          min-height: 100px;
          max-height: 200px;
        }
      }
    }
  }
`;
