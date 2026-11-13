---
tag: 9S02W15HHV
kind: problem
appearances:
  - at: tot/2023-spring/ja5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67268
    url: https://problems.ru/view_problem_details_new.php?id=67268
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
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The positive integers from 1 to 100 are painted into three colors: 50 integers are red, 25 integers are yellow and 25 integers are green. The red and yellow integers can be divided into 25 triples such that each triple includes two red integers and one yellow integer which is greater than one of the red integers and smaller than another one. The same assertion is valid for the red and green integers. Is it necessarily possible to divide all the 100 integers into 25 quadruples so that each quadruple includes two red integers, one yellow integer and one green integer such that the yellow and the green integer lie between the red ones?

*Alexandr Gribalko*
