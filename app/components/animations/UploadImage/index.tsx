'use client';
import React from 'react';
import { useLottie } from 'lottie-react';
import UploadImageJson from './UploadImage.json';

const UploadImage = () => {
  const options = {
    animationData: UploadImageJson,
    loop: true,
    style: { width: 200, height: 200 },
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default UploadImage;
