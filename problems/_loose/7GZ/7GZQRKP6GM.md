---
tag: 7GZQRKP6GM
kind: problem
type: answer
answer: \frac{N(N-1)(2N+5)}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $N \times N$ table, all natural numbers from 1 to $N^{2}$ are arranged. A number is called large if it is the largest in its row, and small if it is the smallest in its column (thus, a number can be both large and small at the same time, or it can be neither). Find the smallest possible difference between the sum of all large numbers and the sum of all small numbers. (S. Tokarev)
