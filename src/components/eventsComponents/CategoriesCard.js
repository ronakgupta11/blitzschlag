import React from "react";
import Image from "next/image";
import borderUp from "../../../public/assets/events/borderup.png";

const CategoriesCard = () => {
  return (
    <div
      style={{
        background: "#f4a54c",
      }}
      className="w-full "
    >
      <div
        className="flex flex-col  ml-[75px] mt-[86px] mb-[120px]"
        style={{ color: "#784e1d" }}
      >
        <p className="text-center text-white font-amita text-5xl">Categories</p>
        <div className="flex items-center justify-around w-full h-full ">
          <div className="relative">
            <div className="outer absolute top-0 left-0">
              <svg
                width="323"
                height="323"
                viewBox="0 0 323 323"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M322.248 161.124C322.248 322.248 322.248 322.248 161.124 322.248C0 322.248 0 322.248 0 161.124C0 72.1376 108.077 64.9453 161.124 0C206.239 62.4665 322.248 72.1376 322.248 161.124Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="inner absolute left-[7px] bottom-[-323px]   ">
              <svg
                width="309"
                height="309"
                viewBox="0 0 309 309"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M308.666 154.232C308.666 308.248 308.666 308.248 154.65 308.248C0.634766 308.248 0.634766 308.248 0.634766 154.232C0.634766 69.1719 103.944 62.2969 154.65 0.216797C197.775 59.9274 308.666 69.1719 308.666 154.232Z"
                  fill="#883800"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#FFF"
                  fontSize="48"
                  fontFamily="Amita"
                  fontStyle="normal"
                  fontWeight="400"
                  style={{ flex: 1, overflow: "visible" }}
                  lineHeight="35"
                  letterSpacing="-0.54px"
                >
                  Flagship
                </text>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="outer absolute top-0 left-0">
              <svg
                width="323"
                height="323"
                viewBox="0 0 323 323"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M322.248 161.124C322.248 322.248 322.248 322.248 161.124 322.248C0 322.248 0 322.248 0 161.124C0 72.1376 108.077 64.9453 161.124 0C206.239 62.4665 322.248 72.1376 322.248 161.124Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="inner absolute left-[7px] bottom-[-323px]   ">
              <svg
                width="309"
                height="309"
                viewBox="0 0 309 309"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M308.666 154.232C308.666 308.248 308.666 308.248 154.65 308.248C0.634766 308.248 0.634766 308.248 0.634766 154.232C0.634766 69.1719 103.944 62.2969 154.65 0.216797C197.775 59.9274 308.666 69.1719 308.666 154.232Z"
                  fill="#883800"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#FFF"
                  fontSize="48"
                  fontFamily="Amita"
                  fontStyle="normal"
                  fontWeight="400"
                  style={{ flex: 1, overflow: "visible" }}
                  lineHeight="35"
                  letterSpacing="-0.54px"
                >
                  Flagship
                </text>
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="outer absolute top-0 left-0">
              <svg
                width="323"
                height="323"
                viewBox="0 0 323 323"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M322.248 161.124C322.248 322.248 322.248 322.248 161.124 322.248C0 322.248 0 322.248 0 161.124C0 72.1376 108.077 64.9453 161.124 0C206.239 62.4665 322.248 72.1376 322.248 161.124Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="inner absolute left-[7px] bottom-[-323px]   ">
              <svg
                width="309"
                height="309"
                viewBox="0 0 309 309"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M308.666 154.232C308.666 308.248 308.666 308.248 154.65 308.248C0.634766 308.248 0.634766 308.248 0.634766 154.232C0.634766 69.1719 103.944 62.2969 154.65 0.216797C197.775 59.9274 308.666 69.1719 308.666 154.232Z"
                  fill="#883800"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#FFF"
                  fontSize="48"
                  fontFamily="Amita"
                  fontStyle="normal"
                  fontWeight="400"
                  style={{ flex: 1, overflow: "visible" }}
                  lineHeight="35"
                  letterSpacing="-0.54px"
                >
                  Flagship
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <Image src={borderUp}></Image>
        <Image src={borderUp}></Image>
        <Image src={borderUp}></Image>
      </div>
    </div>
  );
};

export default CategoriesCard;
