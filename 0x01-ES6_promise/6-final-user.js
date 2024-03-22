import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([signUpRes, photoRes]) => {
      const result = [];
      result.push({
        status: signUpRes.status,
        value: signUpRes.status === 'fulfilled' ? signUpRes.value : signUpRes.reason,
      });
      result.push({
        status: photoRes.status,
        value: photoRes.status === 'fulfiled' ? photoRes.value : photoRes.reason,
      });
      return result;
    });
}
