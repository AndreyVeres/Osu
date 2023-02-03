import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase/firebase';

const uploadAlbumCover = async (file: File, id: string, path?: string) => {
  let deployLink = '';
  let storageRef;
  if (path) {
    storageRef = ref(storage, `/sounds/${id}/${`${path}/`}${file.name}`);
  } else {
    storageRef = ref(storage, `/sounds/${id}/${file.name}`);
  }

  const uploadTask = uploadBytesResumable(storageRef, file);
  const reslut = new Promise((resolve: (value: string) => void, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve(url);
        });
      }
    );
  });
  deployLink = await reslut;
  return deployLink;
};
export default uploadAlbumCover;
