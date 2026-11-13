---
tag: 4SNFMBND6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bangladesh Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3013561
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30885
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2023
    source: hf-ai-mo-aops
    label: 2023 Bangladesh Mathematical Olympiad
---
Joy has a square board of size $n \times n$ . At every step, he colours a cell of the board. He cannot colour any cell more than once. He also counts points while colouring the cells. At first, he has $0$ points. Every step, after colouring a cell $c$ , he takes the largest possible set $S$ that creates a " $+$ " sign where all cells are coloured and $c$ lies in the centre. Then, he gets the size of set $S$ as points. After colouring the whole $n \times n$ board, what is the maximum possible amount of points he can get?
