---
tag: Q9XWXYHY2K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. In a $(2n+1)\times (2n+1)$ board, each grid is dyed white or black. In each row and each column, if the number of white grids is smaller than the number of black grids, then we mark all white grids. If the number of white grids is bigger than the number of black grids, then we mark all black grids. Let $a$ be the number of black grids, and $b$ be the number of white grids, $c$ is the number of marked grids.

In this example of $3\times 3$ table, $a=3$, $b=6$, $c=4$. (forget about my watermark)

Proof that no matter how is the dyeing situation in the beginning, there is always $c\geq\frac{1}{2}\min\{a,b\}$.
