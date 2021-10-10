const request = async (url: string, option = {}) => {
  try {
    const res = await fetch(url, option);
    const data = await res.json();
    return data;
  } catch (e: any) {
    throw new Error('데이터를 가져오는 데 실패하였습니다.');
  }
};

export { request };
