---
tag: 2GDCX3NP15
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{N}$ be identically distributed random variables (not necessarily Bernoulli), $S_{0}=0, S_{i}=\xi_{1}+\ldots+\xi_{i}, 1 \leqslant i \leqslant N$. Let

$$
N_{n}=\sum_{k=1}^{n} I\left(S_{k}>0\right)
$$

- the number of positive terms in the sequence $S_{0}, S_{1}, \ldots, S_{n}$. Show that the following result (Spitzer-Andersen) holds:

$$
\mathrm{P}\left\{N_{n}=k\right\}=\mathrm{P}\left\{N_{k}=k\right\} \mathrm{P}\left\{N_{n-k}=0\right\}, 0 \leqslant k \leqslant n
$$
