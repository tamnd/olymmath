---
tag: 6KM0QQYW3K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{\xi_{n}\right\}_{n \geqslant 1}$ be a sequence of random variables. Show that the set $\left\{\xi_{n} \rightarrow\right\}$, i.e., the set of those $\omega \in \Omega$ where $\xi_{n}(\omega)$ converges, can be represented in the following form:

$$
\left\{\xi_{n} \rightarrow\right\}=\bigcap_{n=1}^{\infty} \bigcup_{m=1}^{\infty} \bigcap_{k=m}^{\infty}\left\{\sup _{l \geqslant k}\left|\xi_{l}-\xi_{k}\right| \leqslant n^{-1}\right\}
$$

The set $\left\{\xi_{n} \nrightarrow\right\}$, where $\xi_{n}$ diverges, can be represented as follows:

$$
\left\{\xi_{n} \nrightarrow\right\}=\bigcup_{n=1}^{\infty} \bigcap_{m=1}^{\infty} \bigcup_{k=m}^{\infty}\left\{\sup _{l \geqslant k}\left|\xi_{l}-\xi_{k}\right|>n^{-1}\right\}
$$
