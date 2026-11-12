---
tag: KCFTTSP3ZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be independent copies of the random variable $\xi$, where

$$
\xi= \begin{cases}2 & \text { with probability } p \\ 1 & \text { with probability } q \\ 0 & \text { with probability } r\end{cases}
$$

and $p, q, r \geqslant 0, p+q+r=1$. Provide a general formula for the probabilities

$$
P_{n}(k, p, q)=\mathrm{P}\left(\xi_{1}+\ldots+\xi_{n}=k\right), 0 \leqslant k \leqslant 2 n
$$
