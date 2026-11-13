---
tag: JS6NNPBQHG
kind: problem
type: answer
answer: m = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For integers $k\ (0\leq k\leq 5)$, positive numbers $m,\ n$ and real numbers $a,\ b$, let $f(k)=\int_{-\pi}^{\pi}(\sin kx-a\sin mx-b\sin nx)^{2}\ dx$,
$p(k)=\frac{5!}{k!(5-k)!}\left(\frac{1}{2}\right)^{5}, \ E=\sum_{k=0}^{5}p(k)f(k)$. Find the values of $m,\ n,\ a,\ b$ for which $E$ is minimized.
