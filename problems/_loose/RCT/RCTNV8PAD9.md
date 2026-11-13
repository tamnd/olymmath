---
tag: RCTNV8PAD9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n} \in \mathbf{R}^{+}$, and $a_{1}+a_{2}+\cdots+a_{n}=s, k \in \mathbf{R}$ and $k>1$, prove that:
$$
\frac{a_{1}^{k}}{s-a_{1}}+\frac{a_{2}^{k}}{s-a_{2}}+\cdots+\frac{a_{n}^{k}}{s-a_{n}} \geqslant \frac{s^{k-1}}{(n-1) \cdot n^{k-2}} .
$$
