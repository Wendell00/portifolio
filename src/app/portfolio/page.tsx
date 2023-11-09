'use client'

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Portfolio(){
  const theme = useTheme();
  const [background, setBackground] = useState(theme.background);

  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, [background]);

  return (
    <div>
      oi
    </div>
  );
};