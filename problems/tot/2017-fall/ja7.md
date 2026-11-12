---
tag: NVN9D3G222
kind: problem
appearances:
  - at: tot/2017-fall/ja7
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66339
    url: https://problems.ru/view_problem_details_new.php?id=66339
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2017-fall official paper
    url: https://turgor.ru/problems/39/os-39-sl-avt.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Город представляет из себя клетчатый прямоугольник, в каждой клетке стоит пятиэтажный дом. Закон о реновации позволяет выбрать две соседних по стороне клетки, в которых стоят дома, и снести тот дом, где меньше этажей (либо столько же). При этом над вторым домом надстраивается столько этажей, сколько было в снесенном доме. Какое наименьшее число домов можно оставить в городе, пользуясь законом о реновации, если город имеет размеры
а) $20 \times 20$ клеток;
б) $50 \times 90$ клеток?
