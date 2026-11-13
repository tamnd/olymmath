---
tag: NGR87JDZR2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232434
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In every cell of a board $101 \times 101$ is written a positive integer. For any choice of $101$ cells from different rows and columns, their sum is divisible by $101$. Show that the number of ways to choose a cell from each row of the board, so that the total sum of the numbers in the chosen cells is divisible by $101$, is divisible by $101$.
