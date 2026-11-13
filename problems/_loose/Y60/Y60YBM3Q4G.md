---
tag: Y60YBM3Q4G
kind: problem
type: answer
answer: n_{1}=n_{2}=\cdots=n_{k}=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $k \geqslant 2$. Find all positive integers $n_{1}, n_{2}, \cdots, n_{k}$, such that:
$$
\begin{array}{l}
n_{2}\left|\left(2^{n_{1}}-1\right), n_{3}\right|\left(2^{n_{2}}-1\right), \cdots, \\
n_{k}\left|\left(2^{n_{k-1}}-1\right), n_{1}\right|\left(2^{n_{k}}-1\right) .
\end{array}
$$
