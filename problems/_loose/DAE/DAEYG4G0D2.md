---
tag: DAEYG4G0D2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all $k \geqslant 0$, we denote $F_{k}$ as the $k$-th Fibonacci number. Let $m, n \geqslant 0$. Show:

$$
F_{n+1}^{m}=\sum_{k_{1}, \ldots, k_{n-1} \geqslant 0}\binom{m}{k_{1}}\binom{m-k_{1}}{k_{2}} \ldots\binom{m-k_{n-2}}{k_{n-1}}
$$
