---
tag: ZG4WM3105N
kind: problem
appearances:
  - at: tot/2019-spring/ja7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66751
    url: https://problems.ru/view_problem_details_new.php?id=66751
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
    url: https://artofproblemsolving.com/community/c6h2102848p15208943
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149037
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $100$ piles of $400$ stones each. At every move, Pete chooses two piles, removes one stone from each of them, and is awarded the number of points, equal to the non- negative difference between the numbers of stones in two new piles. Pete has to remove all stones. What is the greatest total score Pete can get, if his initial score is $0$ ?

(Maxim Didin)
