---
tag: 4NY1VCSCCB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122012
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f: \mathbf{N}^{*} \rightarrow \mathbf{R}$ satisfy the condition: for any $m, n \in \mathbf{N}^{*}$, we have
$$
|f(m)+f(n)-f(m+n)| \leqslant m n .
$$

Prove that for any $n \in \mathbf{N}^{*}$, we have $\left|f(n)-\sum_{k=1}^{n} \frac{f(k)}{k}\right| \leqslant \frac{n(n-1)}{4}$.
