---
tag: AXR5W9GT4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{1}=1, a_{n+1}=a_{n}+\sqrt[n]{a_{n}}\left(n \in \mathbf{Z}_{+}\right) \text {. }
$$

Prove: (1) For any positive integer $n$, we have
$$
n \leqslant a_{n}<2 n \text {; }
$$
(2) For any positive integer $n$, we have
$$
a_{n} \leqslant n+4 \sqrt{n-1} \text {. }
$$
