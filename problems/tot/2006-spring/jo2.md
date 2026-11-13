---
tag: 12DKA57MCW
kind: problem
appearances:
  - at: tot/2006-spring/jo2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65837
    url: https://problems.ru/view_problem_details_new.php?id=65837
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
    url: https://artofproblemsolving.com/community/c6h1078072p4721120
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228780
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $n \times n$ table is filled with the numbers as follows: the first column is filled with $1$ 's, the second column with $2$ 's, and so on. Then, the numbers on the main diagonal (from top-left to bottom-right) are erased. Prove that the total sums of the numbers on both sides of the main diagonal differ in exactly two times.

*(3 points)*
