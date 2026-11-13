---
tag: VND89KPE1G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2114213
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54786
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2001
    source: hf-ai-mo-aops
    label: 2001 239 Open Mathematical Olympiad
---
Integers are placed on every cell of an infinite checkerboard. For each cell if it contains integer $a$ then the sum of
the numbers in the cell under it and the cell right to it is $2a+1$ . Prove that in every infinite diagonal row of direction *top-right down-left* all numbers are different.
