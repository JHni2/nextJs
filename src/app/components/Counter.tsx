// client 컴포넌트라고 명시
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('클라이언트');

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>숫자 증가 시키기</button>
    </>
  );
}
