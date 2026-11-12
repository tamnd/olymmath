---
tag: CKFH3JSTTC
kind: problem
appearances:
  - at: tot/2023-fall/jo3
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67396
    url: https://problems.ru/view_problem_details_new.php?id=67396
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2023-fall official paper
    url: https://turgor.ru/problems/45/os-45-baz-avt.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
У восьми фермеров есть клетчатое поле $8 \times 8$, огороженное по периметру забором и сплошь заросшее ягодами (в каждой точке поля, кроме точек забора, растёт ягода). Фермеры поделили поле между собой по линиям сетки на 8 участков равной площади (каждый участок — многоугольник), но границы отмечать не стали. Каждый фермер следит только за ягодами внутри (не на границе) своего участка, а пропажу замечает, только если у него пропали хотя бы две ягоды. Всё это известно вороне, но где проходят границы между участками, она не знает. Может ли ворона утащить с поля 9 ягод так, чтобы пропажу гарантированно ни один фермер не заметил?
