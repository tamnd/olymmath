---
tag: 9S7B8Z7ADV
kind: problem
type: answer
answer: \frac{n(n^2 - 3n + 5)}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $1, 2, 3$, $\ldots$, $n^2$ are arranged in an $n\times n$ array, so that the numbers in each row increase from left to right, and the numbers in each column increase from top to bottom. Let $a_{ij}$ be the number in position $i, j$. Let $b_j$ be the number of possible values for $a_{jj}$. Show that $$ b_1 + b_2 + \cdots + b_n = \frac{ n(n^2-3n+5) }{3} . $$
