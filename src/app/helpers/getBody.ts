import React, { useEffect, useState } from 'react';

const BodyComponent = () => {
  const [body, setBody] = useState<HTMLBodyElement | null>(null);

  useEffect(() => {
    const bodyElement = document.querySelector('body') as HTMLBodyElement | null;
    setBody(bodyElement);
  }, []);

  return body;
};

export default BodyComponent;