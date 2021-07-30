const quotes = [
    {
      quote: "변명 중에서도 가장 어리석고 못난 변명은 시간이 없다 라는 변명이다.",
      author : "에디슨",
    },
    {
      quote : "끝까지 해보기 전까지는 늘 불가능해 보입니다.",
      author : "넬슨 만델라",
    },
    {
      quote: "지식과 인격이 단절될 때 그 지식인은 가짜요, 위선자이다.",
      author: "법정",
    },
    {
      quote: "불가능은 없다.",
      author: "대한민국 해군 특수전 전단, UDT",
    },
    {
      quote: "위로받으려 하지 마라.",
      author: "구자철",
    },
    {
      quote: "지금의 삶을 다시 한번 똑같이 살아도 전혀 후회하지 않도록 살아라.",
      author: "니체",
    },
    {
      quote: "난 과거의 나하고만 비교한다. 난 항상 어제보다 나아지고 있다.",
      author: "가오가이",
    },
    {
      quote: "안이하게 살고 싶으면 항상 군중속에 머물러 있으라. 군중에 섞여 너 자신을 잃어버려라.",
      author: "니체",
    },
    {
      quote: "모든 기회에는 어려움이 있고, 모든 어려움에는 기회가 있다.",
      author: "시드로우 백스터",
    },
    {
      quote: "성공은 성공지향적인 사람에게만 온다. 실패는 스스로 체념해버리는 사람에게 온다.",
      author: "나폴레온 힐",
    },
  ];


  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = Math.floor(Math.random()*quotes.length)
  quote.textContent = quotes[todaysQuote].quote
  author.textContent = quotes[todaysQuote].author