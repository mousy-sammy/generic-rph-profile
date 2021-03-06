import React from "react";

interface Props {
  imageUrls: string[];
}
export const Gallery: React.FunctionComponent<Props> = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((src) => (
        <span style={{ backgroundImage: `url('${src}');` }}></span>
      ))}
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
        }
        span {
          display: block;
          width: 20%;
          padding-bottom: 20%;
          height: 0;
          background: center top no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

const LazyImage: React.FunctionComponent<{ src: string }> = ({ src }) => {
  return <img src={src} />;
};
