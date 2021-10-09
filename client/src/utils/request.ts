const request = async (url: string, option = {}) => {
  try {
    const res = await fetch(url, option);
    const data = await res.json();
    return data;
  } catch (e: any) {
    throw new Error('에러!!');
  }
};

export { request };
