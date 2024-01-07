
'use client';

import { url } from '@/constants';
import axios from 'axios';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { CLEAR_ERRORS, LOADING_UI, selectLoading } from '@/redux/reducers/uiReducer';
import { useDispatch } from 'react-redux';
export default function UpdateEvent() {
    const dispatch= useDispatch()
    const loading = useSelector(selectLoading)
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [banner, setBanner] = useState('');
  const [rulebook, setRulebook] = useState('');
  const [category, setCategory] = useState('');
  const [prize,setPrize] = useState('')
  const [venue,setVenue] = useState('')
  const [date,setDate] = useState('')
  const [time,setTime] = useState('')
  const [maxParticipants,setMax] = useState('')
  const [clubName,setClub] = useState('')
  const [oneliner,setOneLiner] = useState('')
  

  function onCloseModal() {
    setOpenModal(false);
    setName('');
    setImage('');
    setDesc('');
    setOneLiner('');
    setBanner('');
    setRulebook('');
    setPrize('');
    setDate('');
    setTime('');
    setVenue('')
    setCategory('')
  }


  const submit = ()=>{
    // dispatch(LOADING_UI())
    let eventData ={
        name,desc,oneliner,date,venue,time,prize,image,banner,rulebook,category,maxParticipants,clubName
    }
    const updatedFields={};
    if(name!='') updatedFields.name=name;
    if(desc!='') updatedFields.desc=desc;
    if(oneliner!='') updatedFields.oneliner=oneliner;
    if(venue!='') updatedFields.venue=venue;
    if(time!='') updatedFields.time=time;
    if(prize!='') updatedFields.prize=prize;
    if(image!='') updatedFields.image=image;
    if(banner!='') updatedFields.banner=banner;
    if(banner!='') updatedFields.banner=banner;
    if(rulebook!='') updatedFields.rulebook=rulebook;
    if(category!='') updatedFields.category=category;
    if(maxParticipants!='') updatedFields.maxParticipants=maxParticipants;
    if(clubName!='') updatedFields.clubName=clubName;
    

      axios
      .post('api',{updatedFields:updatedFields})
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add Events</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Create Event</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Name" />
              </div>
              <TextInput
                id="email"
                placeholder="Panaache"
                value={name}
                onChange={(event) => setName(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Desc" />
              </div>
              <TextInput
                id="email"
                placeholder="xyz"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="max Participants" />
              </div>
              <TextInput
                id="email"
                placeholder="participants"
                value={maxParticipants}
                onChange={(event) => setMax(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="clubName" />
              </div>
              <TextInput
                id="email"
                placeholder="xyz"
                value={clubName}
                onChange={(event) => setClub(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="One Liner" />
              </div>
              <TextInput
                id="email"
                placeholder="xyz"
                value={oneliner}
                onChange={(event) => setOneLiner(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="category" />
              </div>
              <TextInput
                id="email"
                placeholder="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Prize" />
              </div>
              <TextInput
                id="email"
                placeholder="50k"
                value={prize}
                onChange={(event) => setPrize(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="banner" />
              </div>
              <TextInput
                id="email"
                placeholder=""
                value={banner}
                onChange={(event) => setBanner(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="image" />
              </div>
              <TextInput
                id="email"
                placeholder=""
                value={image}
                onChange={(event) => setImage(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="rulebook" />
              </div>
              <TextInput
                id="email"
                placeholder="Panaache"
                value={rulebook}
                onChange={(event) => setRulebook(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Venue" />
              </div>
              <TextInput
                id="email"
                placeholder="Panaache"
                value={venue}
                onChange={(event) => setVenue(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="date" />
              </div>
              <TextInput
                id="email"
                placeholder="Panaache"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                // required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Time" />
              </div>
              <TextInput
                id="email"
                placeholder="Panaache"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                // required
              />
            </div>

            <div className="w-full">
              <Button onClick={submit}>{loading?"loading..":"Add Event"}</Button>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
