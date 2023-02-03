import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';

const handleUploadData = async (
  id: string,
  mapName: string,
  audio: string,
  albumCover: string,
  topPlayers: string[],
  additionalAudio: string[],
  additionalPictures: string[]
) => {
  setDoc(doc(db, 'maps', id), {
    mapName,
    audio,
    albumCover,
    topPlayers,
    additionalAudio,
    additionalPictures,
  });
};
export default handleUploadData;
