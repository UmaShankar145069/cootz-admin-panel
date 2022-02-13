let userData = [
  {
    id: 1,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 2,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 3,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 4,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 5,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 6,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 7,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 8,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 9,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
];

// variables
var currentPage = 0;
let pages = "";
let page_size = 5;
pages = paginate(userData, page_size);
pageLi = "";
pages.forEach((element, index) => {
  if (index != 0)
    pageLi +=
      '<li onclick="pageChange(' +
      index +
      ')" class="page-item list-item" id="page_' +
      index +
      '"><a class="page-link" href="javascript:void(0)">' +
      index +
      "</a></li>";
});
$(".page-list").after(pageLi);
page = pages[currentPage];
printRows(page);

function nextPage() {
  if (pages.length - 1 > currentPage) {
    page = currentPage + 1;
  }
  pageChange(page);
}

function prePage() {
  if (currentPage < pages.length && currentPage != 0) {
    page = currentPage - 1;
  }
  pageChange(page);
}

function pageChange(page) {
  currentPage = page;
  $(".list-item").removeClass("active");
  $("#page_" + page).addClass("active");
  $(".page-data").html("");
  page = pages[page];
  printRows(page);
}

function printRows(arr) {
  arr.forEach((element) => {
    console.log(element.username);
    $(".page-data").append(
      "<tr><td>" +
        element.id +
        "</td><td>" +
        element.contestId +
        "</td><td>" +
        element.contestStatus +
        "</td><td><img src='./images/share.png' style='width: 22px; height: 24px; cursor: pointer'></td></tr>"
    );
  });
}

function paginate(arr, size) {
  return arr.reduce((acc, val, i) => {
    let idx = Math.floor(i / size);
    let page = acc[idx] || (acc[idx] = []);
    page.push(val);
    return acc;
  }, []);
}
