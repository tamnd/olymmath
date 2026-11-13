---
tag: 2YBMYHP477
kind: problem
type: answer
answer: \frac{n+1}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place the $n^{2}$ positive integers $1 \sim n^{2}$ ($n \geqslant 2, n \in \mathbf{N}$) randomly into the $n^{2}$ cells of an $n \times n$ grid, with each cell containing exactly one number. For every pair of numbers in the same row or column, compute the ratio of the larger number to the smaller number. The minimum value among these $n^{2}(n-1)$ ratios is called the "characteristic value" of this filling method. Prove that for any filling method, its characteristic value is no greater than $\frac{n+1}{n}$.
