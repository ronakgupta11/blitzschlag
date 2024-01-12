import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function TeamCard({ data }) {
  return (
    <div className="flex flex-col m-4 items-center justify-center space-x-2 space-y-2 ">
      <div className="img-div flex flex-col w-full m-4">
        {/* <div className="rounded-full bg-red-500 w-12 h-12 self-end"></div> */}
        <div className=" w-48 h-60 self-center flex items-center justify-center">
          <img
            className=" rounded-lg w-full h-full border-2 border-white"
            src={
              data?.img
                ? data.img
                : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
            }
          />
        </div>
        {/* <div className="rounded-full bg-red-500 w-8 h-8 self-start"></div> */}
      </div>
      <div className="text-div flex flex-col text-white items-center space-y-6 ">
        <p className=" text-xl font-amita">{data?.Position}</p>
        <p className=" text-lg font-amita">{data?.Name}</p>

        <div className="flex items-center space-x-4 ">
          {data?.instagram && (
            <Link href={data?.instagram} target="_blank">
              <span>
                <FaInstagram size={20} />
              </span>
            </Link>
          )}
          {data?.linkedin && (
            <Link href={data?.linkedin} target="_blank">
              <span>
                <FaLinkedin size={20} />
              </span>
            </Link>
          )}
          {data?.Gmail && (
            <Link href={`mailto:${data.Gmail}`} target="_blank">
              <span>
                <FaEnvelope size={20} />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
