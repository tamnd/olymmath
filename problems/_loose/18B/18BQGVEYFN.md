---
tag: 18BQGVEYFN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{\xi_{n}\right\}_{n \geqslant 1}$ be a uniformly integrable family of random variables. Show that the families

$$
\begin{gathered}
\left\{\zeta:|\zeta| \preccurlyeq\left|\xi_{n}\right| \text { for some } n\right\}, \\
\left\{\sum_{n} \lambda_{n} \xi_{n}: \lambda_{n} \in \mathbb{R}, \sum_{n}\left|\lambda_{n}\right|=1\right\}
\end{gathered}
$$

are also uniformly integrable, where it is assumed that the series $\sum_{n} \lambda_{n} \xi_{n}$ converges in $L^{1}$, and "$\preccurlyeq$" denotes stochastic dominance, i.e.,

$$
|X| \preccurlyeq|Y| \Leftrightarrow \mathrm{P}(|X|>x) \leqslant \mathrm{P}(|Y|>x) \text { for all } x>0 \text {. }
$$
