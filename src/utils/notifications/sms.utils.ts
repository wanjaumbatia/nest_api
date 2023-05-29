import { User } from 'src/users/entities/user.entity';

export const sendOtp = (user: User) => {
  const phone = formatPhoneNumber(user.phone);
  const sms = `Hello ${getFirstName(user.name)}, Use ${formatOtpCode(
    user.otp,
  )} to verify your account.`;
  console.log(sms);
};

export const formatPhoneNumber = (phoneNumber: string) => {
  const phoneArray = phoneNumber.split('');
  if (phoneArray.length <= 10 && phoneArray[0] == '0') {
    phoneArray[0] = '+254';
    var phone = '';
    phoneArray.forEach((element) => {
      phone = phone + element;
    });
  } else if (phoneArray.length == 13 && phoneArray[0] == '+') {
    return phoneNumber;
  }
};

const formatOtpCode = (otp: string) => {
  const otpArray = otp.split('');
  var newOtpCode = '';
  for (let i = 0; i < otpArray.length; i++) {
    if (i == 3) {
      newOtpCode = newOtpCode + ' ' + otpArray[i];
    } else {
      newOtpCode = newOtpCode + otpArray[i];
    }
  }
  return newOtpCode;
};

const getFirstName = (name: string) => {
  const splitName = name.split(' ');
  return splitName[0];
};
