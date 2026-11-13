---
tag: R5HRDYS42W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three, there is an empty square grid of size $n \times n (n \leqslant 4)$. In each cell of the grid, one of the two numbers +1 and -1 is filled in arbitrarily. The product of the numbers in $n$ cells that are pairwise in different rows (horizontal) and different columns (vertical) is called a basic term. Try to prove: For any grid filled in the above manner, the sum of all its basic terms is always divisible by 4 (i.e., it can always be expressed in the form $4k$, where $k \in \mathbf{Z}$).
