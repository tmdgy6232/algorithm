const data = {
  depth1CategoryNo: 680039,
  depth1Label: "만두",
  depth1DisplayOrder: 1,
  depth1Icon: "",
  depth1Content: "",
  fullCategoryName: "만두>아하만두",
  depth2CategoryNo: 680041,
  depth2Label: "아하만두",
  depth2DisplayOrder: 1,
  depth2Icon: "",
  depth2Content: "",
  depth3CategoryNo: 0,
  depth3Label: "",
  depth3DisplayOrder: 0,
  depth3Icon: "",
  depth3Content: "",
  depth4CategoryNo: 0,
  depth4Label: "",
  depth4DisplayOrder: 0,
  depth4Icon: "",
  depth4Content: "",
  depth5CategoryNo: 0,
  depth5Label: "",
  depth5DisplayOrder: 0,
  depth5Icon: "",
  depth5Content: "",
};

function setCategoryString(data, depth, result) {
  if (depth === 5) return result;
  if (data[`depth${depth}CategoryNo`] != 0) {
    if (data[`depth${depth + 1}CategoryNo`] != 0) {
      return setCategoryString(
        data,
        depth + 1,
        depth == 1
          ? `${data[`depth${depth}Label`]} >`
          : `${result} ${data[`depth${depth}Label`]} >`
      );
    } else {
      return setCategoryString(
        data,
        depth + 1,
        depth == 1
          ? `${data[`depth${depth}Label`]}`
          : `${result} ${data[`depth${depth}Label`]}`
      );
    }
  } else {
    return result;
  }
}

function getCategoryNo(data) {
  for (let i = 1; i <= 6; i++) {
    if (data[`depth${i}CategoryNo`] === 0) return i - 1;
  }

  return 1;
}

console.log(setCategoryString(data, 1));

console.log(getCategoryNo(data));
