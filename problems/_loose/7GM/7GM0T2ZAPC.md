---
tag: 7GM0T2ZAPC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Pan-American Girls’ Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3130849
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27361
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pagmo/2023
    source: hf-ai-mo-aops
    label: 2023 Pan-American Girls’ Mathematical Olympiad
---
Let $n \geq 2$ be an integer. Lucia chooses $n$ real numbers $x_1,x_2,\ldots,x_n$ such that $\left| x_i-x_j \right|\geq 1$ for all $i\neq j$ . Then, in each cell of an $n \times n$ grid, she writes one of these numbers, in such a way that no number is repeated in the same row or column. Finally, for each cell, she calculates the absolute value of the difference between the number in the cell and the number in the first cell of its same row. Determine the smallest value that the sum of the $n^2$ numbers that Lucia calculated can take.
