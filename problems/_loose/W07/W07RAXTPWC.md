---
tag: W07RAXTPWC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be independent random variables,

$$
\mathrm{P}\left(\xi_{n}=0\right)=n^{-1} \text { and } \mathrm{P}\left(\xi_{n}=1\right)=1-n^{-1} .
$$

Let $A_{n}=\left\{\xi_{n}=0\right\}$. From the properties $\sum_{n=1}^{\infty} \mathrm{P}\left(A_{n}\right)=\infty, \sum_{n=1}^{\infty} \mathrm{P}\left(\bar{A}_{n}\right)=\infty$, conclude that $\lim _{n} \xi_{n}$ does not exist a.s.
