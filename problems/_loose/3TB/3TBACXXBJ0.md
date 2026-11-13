---
tag: 3TBACXXBJ0
kind: problem
type: answer
answer: a_{n}=9\times10^{n-3}(n\geqslant3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}\left(a_{n} \geqslant 0\right)$ satisfy $a_{1}=0, a_{2}=1, a_{3}=9$, and
$$
S_{n}^{2} S_{n-2}=10 S_{n-1}^{3}(n>3),
$$

where $S_{n}$ is the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$. Find the expression for $a_{n}(n \geqslant 3)$.
