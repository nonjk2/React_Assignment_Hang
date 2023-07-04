# 폴더구조

- `src`
  - `components`
    - [`todolist`](./src/components/todolist/)
      - `todoItemCards.jsx`
      - `todoListBody.jsx`
      - `todoListInput.jsx`
      - `todoListInputElement.jsx`
      - `todoWorkDoneContainer.jsx`
  - [`hooks`](./src/hooks/)
    - `useInput.js`
  - [`layout`](./src/layout/)
    - `header`
      - `index.jsx`
    - `index.jsx`
  - `pages`
    - [`todolist`](./src/pages/todoList/)
      - `index.jsx`
      - `style.js`
  - [`styles`](./src/styles/)
    - `globalstyle.js`
    - `todoList.js`
  - `App.jsx`
  - `main.jsx`

## 요구사항

1. 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.

2. Todo의 **isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료`** 로 조건부 렌더링 해주세요. 위 영상을 보면 버튼 내 라벨이 다른 걸 볼 수 있죠?
3. Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현합니다.

4. Layout의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고, 전체 화면의 가운데로 정렬해주세요.
5. **컴포넌트 구조는 자유롭게 구현해보세요.**
   - 반복되는 컴포넌트를 찾아서, 직접 컴포넌트를 분리해보시고, 분리한 컴포넌트를 `README`에 작성합니다.
