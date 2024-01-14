
'use client';

import { Button, Modal } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function SlickModal({openModal,setOpenModal}) {

  return (
    <>
      <Button className='hidden' onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Please register on Slick App for Pronite Access
            </h3>
            <div className="flex justify-center gap-4">
                <Link href={"https://play.google.com/store/apps/details?id=com.slickapp"} target='_blank'>
              <Button color='success' onClick={() => setOpenModal(false)}>
                {"Download"}
              </Button>
                </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SlickModal