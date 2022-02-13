let userData = [
  {
    id: 1,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 2,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 3,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 4,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 5,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 6,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 7,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 8,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 9,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 10,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 11,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 12,
    username: "username",
    referal: "Referal Level",
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
        element.username +
        "</td><td>" +
        element.referal +
        "</td></tr>"
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
