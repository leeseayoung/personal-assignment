export interface Country {
  //나라
  name: {
    common: string;
  };
  // 수도
  capital: string[];
  //나라 사진
  flags: {
    png: string;
    svg: string;
  };
}
