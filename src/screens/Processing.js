/**
 * 
async function cancel() {
  await PassportReader.cancel();
}

async function scan() {
  // 1. start a scan
  // 2. press the back of your android phone against the passport
  // 3. wait for the scan(...) Promise to get resolved/rejected

  console.warn({
    firstName,
    lastName,
    gender,
    issuer,
    nationality,
    photo
  } = await PassportReader.scan({
    // yes, you need to know a bunch of data up front
    // this is data you can get from reading the MRZ zone of the passport
    documentNumber: '00000X64A',
    dateOfBirth: '961220',
    dateOfExpiry: '280315'
  }));

  const { base64, width, height } = photo


}
 */