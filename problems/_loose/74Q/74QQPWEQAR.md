---
tag: 74QQPWEQAR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathscr{D}_{0} \preccurlyeq \mathscr{D}_{1} \preccurlyeq \ldots \preccurlyeq \mathscr{D}_{n}$ be a sequence of partitions, $\mathscr{D}_{0}=\{\Omega\} ; \eta_{k}$ is a $\mathscr{D}_{k}$-measurable random variable, $1 \leqslant k \leqslant n$. Prove that the sequence $\xi=\left(\xi_{k}, \mathscr{D}_{k}\right)_{1 \leqslant k \leqslant n}$, where

$$
\xi_{k}=\sum_{l=1}^{k}\left[\eta_{l}-\mathrm{E}\left(\eta_{l} \mid \mathscr{D}_{l-1}\right)\right],
$$

is a martingale.
