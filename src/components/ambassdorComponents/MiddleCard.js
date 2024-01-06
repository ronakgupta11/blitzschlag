import React from "react";
import Image from "next/image";
import borderDown1 from "../../../public/assets/borderDown1.png";
import borderDown2 from "../../../public/assets/borderDown2.png";
import groupIcon from "../../../public/assets/groupIcon.svg";
import shareIcon from "../../../public/assets/shareIcon.svg";
import graphIcon from "../../../public/assets/graphIcon.svg";
const MiddleCard = () => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #221800 27.86%, #000 187.94%)",
      }}
      className="w-full "
    >
      {/* border */}
      <div className="flex w-full ">
        <Image src={borderDown1}></Image>
        <Image src={borderDown2}></Image>
        <Image src={borderDown2}></Image>
      </div>
      <div
        className="flex flex-col justify-center lg:text-6xl text-3xl text-center font-sankaran mt-16 mb-16"
        style={{ color: "#E9B704" }}
      >
        What should you do?
        <div className="mt-10 flex justify-center align-middle gap-[50px] flex-wrap ">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              viewBox="0 0 309 309"
              fill="none"
              className=""
            >
              <path
                d="M308.665 154.232C308.665 308.248 308.665 308.248 154.65 308.248C0.634521 308.248 0.634521 308.248 0.634521 154.232C0.634521 69.1719 103.943 62.2969 154.65 0.216797C197.774 59.9274 308.665 69.1719 308.665 154.232Z"
                fill="#463000"
              />
              <svg
                x={"43%"}
                y={"23%"}
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M28.6747 22.7968C27.0588 22.7963 25.5069 23.381 24.352 24.4253L13.0941 18.577C13.3255 17.695 13.3255 16.7746 13.0941 15.8925L24.3485 10.0442C25.3999 10.9892 26.781 11.5575 28.2445 11.6474C29.708 11.7374 31.1584 11.3431 32.336 10.5352C33.5136 9.72728 34.3416 8.55846 34.6716 7.23798C35.0017 5.91751 34.8123 4.5316 34.1373 3.32838C33.4624 2.12516 32.346 1.18318 30.988 0.671086C29.63 0.158992 28.119 0.110218 26.7256 0.533497C25.3322 0.956776 24.1474 1.82447 23.3832 2.98124C22.619 4.138 22.3254 5.50832 22.5549 6.84686L11.035 12.8342C10.1302 12.1377 9.02923 11.6938 7.86115 11.5546C6.69307 11.4153 5.50624 11.5866 4.43971 12.0482C3.37317 12.5098 2.47109 13.2427 1.83915 14.161C1.20721 15.0793 0.871582 16.1449 0.871582 17.2331C0.871582 18.3213 1.20721 19.387 1.83915 20.3053C2.47109 21.2236 3.37317 21.9565 4.43971 22.4181C5.50624 22.8797 6.69307 23.0509 7.86115 22.9117C9.02923 22.7725 10.1302 22.3286 11.035 21.632L22.5549 27.6227C22.3558 28.7791 22.5451 29.964 23.0975 31.0179C23.6498 32.0718 24.5386 32.9438 25.644 33.5165C26.7493 34.0892 28.0182 34.335 29.2794 34.2207C30.5406 34.1065 31.7336 33.6377 32.6976 32.8775C33.6615 32.1174 34.3501 31.1025 34.6704 29.9696C34.9907 28.8367 34.9274 27.6403 34.4889 26.5416C34.0505 25.443 33.2581 24.495 32.2185 23.8254C31.1788 23.1558 29.942 22.7968 28.6747 22.7968Z"
                  fill="white"
                />
              </svg>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#FFF"
                fontSize="18"
                fontFamily="Amita"
                fontStyle="normal"
                fontWeight="400"
                style={{ flex: 1, overflow: "visible" }}
                lineHeight="35"
                letterSpacing="-0.54px"
              >
                Generate excitement and anticipation
                <tspan x="50%" y="60%">
                  {" "}
                  for the fest through word of-mouth
                </tspan>
                <tspan x="50%" y="70%">
                  promotions, social media campaigns,
                </tspan>
                <tspan x="50%" y="80%">
                  and engaging activities .
                </tspan>
                
              </text>
            </svg>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              viewBox="0 0 309 309"
              fill=""
            >
              <path
                d="M308.665 154.232C308.665 308.248 308.665 308.248 154.65 308.248C0.634521 308.248 0.634521 308.248 0.634521 154.232C0.634521 69.1719 103.943 62.2969 154.65 0.216797C197.774 59.9274 308.665 69.1719 308.665 154.232Z"
                fill="#E9B704"
              />
              <svg
                x={"43%"}
                y={"23%"}
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 166">
                  <path
                    id="Vector"
                    d="M17.8716 34.248C8.49788 34.248 0.871582 26.6217 0.871582 17.248C0.871582 7.87434 8.49788 0.248047 17.8716 0.248047C27.2453 0.248047 34.8716 7.87434 34.8716 17.248C34.8716 26.6217 27.2453 34.248 17.8716 34.248ZM17.8716 2.86343C9.9437 2.86343 3.48697 9.32016 3.48697 17.248C3.48697 25.1759 9.9437 31.6327 17.8716 31.6327C25.7995 31.6327 32.2562 25.18 32.2562 17.248C32.2562 9.31608 25.8036 2.86343 17.8716 2.86343Z"
                    fill="#463000"
                  />
                  <path
                    id="Vector_2"
                    d="M23.4023 20.1899C21.9802 20.1899 20.6063 19.5589 19.5332 18.4139C18.4717 17.2626 17.8371 15.7821 17.7351 14.2195C17.615 12.5276 18.134 10.9707 19.1965 9.83707C20.259 8.70346 21.744 8.09375 23.4023 8.09375C25.0484 8.09375 26.5383 8.71654 27.5976 9.84769C28.6568 10.9788 29.1889 12.5448 29.0687 14.2211C28.9648 15.7828 28.3304 17.2621 27.2706 18.4139C26.1967 19.5589 24.8236 20.1899 23.4023 20.1899ZM10.3377 20.4645C7.90535 20.4645 5.76646 18.2161 5.57031 15.452C5.46978 14.0364 5.90949 12.7279 6.81016 11.7675C7.71084 10.8072 8.95314 10.2964 10.3368 10.2964C11.7205 10.2964 12.962 10.8227 13.857 11.779C14.7519 12.7352 15.2055 14.0527 15.1034 15.4569C14.904 18.2169 12.7659 20.4645 10.3377 20.4645ZM31.3057 25.3618C31.1757 24.9777 30.8594 24.5682 30.2252 24.18C28.3078 23.0088 25.9491 22.3893 23.4023 22.3893C20.9038 22.3893 18.4797 23.035 16.5754 24.2078C14.4299 25.5294 12.9882 27.4566 12.4071 29.7802C12.2698 30.327 12.0695 31.3445 12.2837 31.9142C15.72 33.2209 19.5059 33.2809 22.9819 32.0836C26.4579 30.8863 29.4038 28.5076 31.3065 25.3618H31.3057ZM10.3221 29.1288C10.9 26.8232 12.13 24.9009 14.0384 23.3463C14.1287 23.2719 14.1973 23.1746 14.2371 23.0647C14.2769 22.9547 14.2865 22.8361 14.2649 22.7211C14.2433 22.6062 14.1912 22.4991 14.1142 22.4112C14.0371 22.3232 13.9378 22.2575 13.8267 22.2209C12.846 21.9079 11.7263 21.7403 10.3377 21.7403C8.39084 21.7403 6.32386 22.2675 4.76853 23.2254C4.32718 23.4975 3.89401 23.6022 3.56055 23.6953C4.89936 26.6543 7.11959 29.1275 9.91757 30.7765L10.0639 30.765C10.0959 30.2125 10.1824 29.6644 10.3221 29.1288Z"
                    fill="#463000"
                  />
                </g>
              </svg>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#463000"
                fontSize="18"
                fontFamily="Amita"
                fontStyle="normal"
                fontWeight="400"
                style={{ flex: 1, overflow: "visible" }}
                lineHeight="35"
                letterSpacing="-0.54px"
              >
                Gathering participation :
                <tspan x="50%" y="60%">
                  {" "}
                  Motivate and encourage your peers
                </tspan>
                <tspan x="50%" y="70%">
                  to participate in the fest's diverse
                </tspan>
                <tspan x="50%" y="80%">
                  competitions , workshops , and events.
                </tspan>
              </text>
            </svg>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="250"
              viewBox="0 0 309 309"
              fill="none"
            >
              <path
                d="M308.665 154.232C308.665 308.248 308.665 308.248 154.65 308.248C0.634521 308.248 0.634521 308.248 0.634521 154.232C0.634521 69.1719 103.943 62.2969 154.65 0.216797C197.774 59.9274 308.665 69.1719 308.665 154.232Z"
                fill="#463000"
              />
              <svg
                x={"43%"}
                y={"23%"}
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M5.4485 34.248H2.83312C2.31289 34.248 1.81396 34.0689 1.4461 33.7501C1.07824 33.4313 0.871582 32.9989 0.871582 32.548V22.348C0.871582 21.8972 1.07824 21.4648 1.4461 21.146C1.81396 20.8272 2.31289 20.648 2.83312 20.648H5.4485C5.96874 20.648 6.46766 20.8272 6.83552 21.146C7.20338 21.4648 7.41004 21.8972 7.41004 22.348V32.548C7.41004 32.9989 7.20338 33.4313 6.83552 33.7501C6.46766 34.0689 5.96874 34.248 5.4485 34.248ZM23.7562 34.248H21.1408C20.6206 34.248 20.1217 34.0689 19.7538 33.7501C19.3859 33.4313 19.1793 32.9989 19.1793 32.548V15.548C19.1793 15.0972 19.3859 14.6648 19.7538 14.346C20.1217 14.0272 20.6206 13.848 21.1408 13.848H23.7562C24.2764 13.848 24.7754 14.0272 25.1432 14.346C25.5111 14.6648 25.7177 15.0972 25.7177 15.548V32.548C25.7177 32.9989 25.5111 33.4313 25.1432 33.7501C24.7754 34.0689 24.2764 34.248 23.7562 34.248ZM32.91 34.248H30.2947C29.7744 34.248 29.2755 34.0689 28.9076 33.7501C28.5398 33.4313 28.3331 32.9989 28.3331 32.548V7.61471C28.3331 7.16385 28.5398 6.73144 28.9076 6.41263C29.2755 6.09382 29.7744 5.91471 30.2947 5.91471H32.91C33.4303 5.91471 33.9292 6.09382 34.2971 6.41263C34.6649 6.73144 34.8716 7.16385 34.8716 7.61471V32.548C34.8716 32.9989 34.6649 33.4313 34.2971 33.7501C33.9292 34.0689 33.4303 34.248 32.91 34.248ZM14.6024 34.248H11.987C11.4667 34.248 10.9678 34.0689 10.5999 33.7501C10.2321 33.4313 10.0254 32.9989 10.0254 32.548V1.94805C10.0254 1.49718 10.2321 1.06478 10.5999 0.745965C10.9678 0.427154 11.4667 0.248047 11.987 0.248047H14.6024C15.1226 0.248047 15.6215 0.427154 15.9894 0.745965C16.3572 1.06478 16.5639 1.49718 16.5639 1.94805V32.548C16.5639 32.9989 16.3572 33.4313 15.9894 33.7501C15.6215 34.0689 15.1226 34.248 14.6024 34.248Z"
                  fill="white"
                />
              </svg>
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#FFF"
                fontSize="18"
                fontFamily="Amita"
                fontStyle="normal"
                fontWeight="400"
                style={{ flex: 1, overflow: "visible" }}
                lineHeight="35"
                letterSpacing="-0.54px"
              >
                Being a source of information :
                <tspan x="50%" y="60%"> 
                  {" "}
                  Answer your classmates' questions,
                </tspan>
                <tspan x="50%" y="70%">
                  provide clear directions, and act as
                </tspan>
                <tspan x="50%" y="80%">
                 a helpful guide throughout the fest.
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <Image className="rotate-180" src={borderDown1}></Image>
        <Image className="rotate-180" src={borderDown2}></Image>
        <Image className="rotate-180" src={borderDown2}></Image>
      </div>
    </div>
  );
};

export default MiddleCard;
