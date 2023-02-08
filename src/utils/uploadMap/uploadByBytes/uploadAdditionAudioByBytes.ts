import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';

const uploadAdditionAudioByBytes = async (arrayOfBytes: Uint8Array, id: string, name: string) => {
  const storageRef = ref(storage, `/sounds/${id}/additionAudio/${name}`);
  const metadata = {
    contentType: 'audio/mpeg',
  };
  const bytes = new Uint8Array(arrayOfBytes);
  const result = new Promise((resolve: (value: string) => void, reject) => {
    uploadBytes(storageRef, bytes, metadata).then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      resolve(url);
    });
  });
  const deployLink = await result;
  return deployLink;
};
export default uploadAdditionAudioByBytes;
