---
tag: C39WX6M2SR
kind: problem
type: answer
answer: 2^{-2}C_{2}^{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{N}$ be independent Bernoulli random variables, $\mathrm{P}\left\{\xi_{i}=1\right\}=\mathrm{P}\left\{\xi_{i}=-1\right\}=1 / 2, i=1, \ldots, N$. Let $S_{m}=\xi_{1}+\ldots$ $\ldots+\xi_{m}$. Show that for $2 m \leqslant N$ the following equality holds:

$$
\mathrm{P}\left\{S_{1} \ldots S_{2 m} \neq 0\right\}=2^{-2 m} C_{2 m}^{m}
$$
