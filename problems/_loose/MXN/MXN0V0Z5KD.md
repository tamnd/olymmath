---
tag: MXN0V0Z5KD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{S_{k}, k \leqslant n\right\}, S_{0}=0, S_{k}=\xi_{1}+\ldots+\xi_{k}$, be a symmetric Bernoulli random walk (with independent and identically distributed random variables $\xi_{1}, \ldots, \xi_{n}$ such that $\left.\mathrm{P}\left\{\xi_{1}=1\right\}=\mathrm{P}\left\{\xi_{1}=-1\right\}=1 / 2\right)$. Let

$$
M_{n}=\max _{0 \leqslant k \leqslant n} S_{k}, m_{n}=\min _{0 \leqslant k \leqslant n} S_{k}
$$

Show that

$$
\left(M_{n},-m_{n},-S_{n}\right) \stackrel{d}{=}\left(-m_{n}, M_{n}, S_{n}\right) \stackrel{d}{=}\left(M_{n}-S_{n}, S_{n}-m_{n}, S_{n}\right),
$$

where " $\stackrel{d}{=}$ " means that the corresponding triples of random variables have the same distribution.
