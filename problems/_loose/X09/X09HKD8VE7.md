---
tag: X09HKD8VE7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1957 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1900368
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56839
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1957
    source: hf-ai-mo-aops
    label: 1957 Moscow Mathematical Olympiad
---
For any column and any row in a rectangular numerical table, the product of the sum of the numbers in a column by the sum of the numbers in a row is equal to the number at the intersection of the column and the row. Prove that either the sum of all the numbers in the table is equal to $1$ or all the numbers are equal to $0$ .
