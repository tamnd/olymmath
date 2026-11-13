---
tag: 5YVR9X0FJ6
kind: problem
appearances:
  - at: tot/2021-fall/ja6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67053
    url: https://problems.ru/view_problem_details_new.php?id=67053
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: AI-MO AoPS
    url: https://huggingface.co/datasets/project-numina/aops
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h3017239p27113327
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=67809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any positive integers $a_1, a_2, \ldots , a_n$ the following inequality holds true:
$$\left\lfloor\frac{a_1^2}{a_2}\right\rfloor+\left\lfloor\frac{a_2^2}{a_3}\right\rfloor+\cdots+\left\lfloor\frac{a_n^2}{a_1}\right\rfloor\geqslant a_1+a_2+\cdots+a_n.$$
*Maxim Didin*
