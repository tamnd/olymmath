---
tag: VM44HM2MYX
kind: problem
appearances:
  - at: tot/2024-fall/ja6
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67489
    url: https://problems.ru/view_problem_details_new.php?id=67489
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2024-fall official paper
    url: https://turgor.ru/problems/46/os-46-sl-avt.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
status:
  statement: captured
---
Назовём ходы коня, при которых он смещается на две клетки по горизонтали и на одну по вертикали, горизонтальными, а остальные — вертикальными. Требуется поставить коня на одну из клеток доски $46 \times 46$, после чего чередовать им горизонтальные и вертикальные ходы. Докажите, что если запрещено посещать клетки более одного раза, то будет сделано не более 2024 ходов.
