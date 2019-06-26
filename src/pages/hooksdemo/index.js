import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
export default function HooksDemo(props) {
  const [sum, setSum] = useState(0);
  useEffect(() => {
    console.log(sum);
  })
  return (
    <div>
      <div>{sum}</div>
      <Button onClick={() => setSum(sum + 1)}>Add One</Button>
    </div>
  );
}
