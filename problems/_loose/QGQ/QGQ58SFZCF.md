---
tag: QGQ58SFZCF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Bulgaria EGMO TST
    url: https://artofproblemsolving.com/community/c6h3008247
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32943
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-egmo-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Bulgaria EGMO TST
---
Let $n$ and $t$ be positive integers. What is the number of ways to place $t$ dominoes $(1\times 2$ or $2\times 1$ rectangles) in a $2\times n$ table so that there is no $2\times 2$ square formed by $2$ dominoes and each $2\times 3$ rectangle either does not have a horizontal domino in the middle and last cell in the first row or does not have a horizontal domino in the first and middle cell in the second row (or both)?
