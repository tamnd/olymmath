---
tag: KCMZSJ0AGN
kind: problem
appearances:
  - at: tot/2017-fall/sa7
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66346
    url: https://problems.ru/view_problem_details_new.php?id=66346
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2017-fall official paper
    url: https://turgor.ru/problems/39/os-39-sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Город имеет вид квадрата $n \times n$, разбитого на кварталы $1 \times 1$. Улицы идут с севера на юг и с запада на восток. Человек каждый день утром идёт из юго-западного угла в северовосточный, двигаясь только на север или восток, а вечером возвращается обратно, двигаясь только на юг или запад. Каждое утро он выбирает свой путь так, чтобы суммарная длина знакомых участков пути (тех, которые он уже проходил в том или ином направлении) была минимальна, и каждый вечер тоже. Докажите, что за $n$ дней он пройдёт все улицы целиком.
