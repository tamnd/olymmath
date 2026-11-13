---
tag: F1YTS73M0P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all integers $x$ and $y$, let $a_{x, y}$ be a real number. Suppose that $a_{0, 0} = 0$. Suppose that only a finite number of the $a_{x, y}$ are nonzero. Prove that
$$
\sum_{x = -\infty}^\infty \sum_{y = -\infty}^{\infty} a_{x,y} ( a_{x, 2x + y} + a_{x + 2y, y} )
\le \sqrt{3} \sum_{x = -\infty}^\infty \sum_{y = -\infty}^{\infty} a_{x, y}^2 .
$$
