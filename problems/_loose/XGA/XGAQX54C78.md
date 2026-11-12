---
tag: XGAQX54C78
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi, \xi_{1}, \xi_{2}, \ldots$ be random vectors in $\mathbb{R}^{d}$. Prove that $\xi_{n} \xrightarrow{p} \xi$, if and only if for any increasing sequence $\left(n^{\prime}\right) \subset(n)$ there exists a subsequence $\left(n^{\prime \prime}\right) \subset\left(n^{\prime}\right)$, for which

$$
\xi_{n^{\prime \prime}} \rightarrow \xi \text { a.s., } n^{\prime \prime} \rightarrow \infty
$$
