---
tag: HDT0N0Q6EZ
kind: problem
type: answer
answer: (,2013-),with0\leqslant\leqslant2013
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77264
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Martin wrote the pair of integers $(1011,1012)$ on the board. Then, every minute, if the pair $(a, b)$ is written on the board, he erases it and replaces it, according to his choice, with one of the pairs $(b, a)$, $(b+1, a-1)$, or $(b-2, a+2)$, with the only constraint being to write only pairs where both numbers are non-negative.

What pairs of integers can Martin write on the board after a finite number of such operations?
