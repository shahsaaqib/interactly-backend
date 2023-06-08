import axios from 'axios';

export async function createContact(data) {
  try {
    const config = {
      headers: { Authorization: `Token ${process.env.TOKEN}` },
    };

    const res = await axios.post(
      'https://domain.freshsales.io/api/contacts',
      data,
      config
    );
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function getContact(id) {
  try {
    const config = {
      headers: { Authorization: `Token ${process.env.TOKEN}` },
    };

    const res = await axios.get(
      `https://domain.freshsales.io/api/contacts/${id}`,
      config
    );
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function updateContact(data) {
  try {
    const config = {
      headers: { Authorization: `Token ${process.env.TOKEN}` },
    };

    const res = await axios.put(
      'https://domain.freshsales.io/api/contacts/upsert',
      data,
      config
    );
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export async function deleteContact(id) {
  try {
    const config = {
      headers: { Authorization: `Token ${process.env.TOKEN}` },
    };

    const res = await axios.delete(
      `https://domain.freshsales.io/api/contacts/${id}`,
      config
    );
    return Promise.resolve(res);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
