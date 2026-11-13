---
tag: JGPWEQ04WJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fill the integers $1,2,3, \cdots, 2016^{2}$ into a $2016 \times 2016$ grid, with each cell containing one number, and any two cells containing different numbers. Now connect the centers of any two cells with a vector, all directed from the smaller number to the larger number. If the sum of the numbers in each row and each column of the grid is the same, find the sum of all the vectors drawn.
