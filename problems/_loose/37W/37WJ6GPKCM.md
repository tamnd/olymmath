---
tag: 37WJ6GPKCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be i.i.d. random variables, $\mathrm{E}\left|\xi_{1}\right|<\infty$. Show that a.s.

$$
\mathrm{E}\left(\xi_{1} \mid S_{n}, S_{n+1}, \ldots\right)=n^{-1} S_{n}
$$

where $S_{n}=\xi_{1}+\ldots+\xi_{n}$.
