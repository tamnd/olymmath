---
tag: S0H5D29AFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the following version of Fatou's lemma for conditional mathematical expectations.

Let $(\Omega, \mathscr{F}, \mathrm{P})$ be a probability space and $\left(\xi_{n}\right)_{n \geqslant 1}$ be a sequence of random variables such that the expectations $\mathrm{E} \xi_{n}, n \geqslant 1$, and $\mathrm{E} \underline{\lim } \xi_{n}$ (which may take values $\pm \infty$) are defined.

Assume that $\mathscr{G}$ is a $\sigma$-subalgebra of events from $\mathscr{F}$ and

$$
\varlimsup_{n} \mathrm{E}\left(\xi_{n}^{-} I\left(\xi_{n}^{-} \geqslant k\right) \mid \mathscr{G}\right) \rightarrow 0 \text { a.s., } k \rightarrow \infty
$$

Then

$$
\mathrm{E}\left(\lim \xi_{n} \mid \mathscr{G}\right) \leqslant \underline{\lim } \mathrm{E}\left(\xi_{n} \mid \mathscr{G}\right) \text { a.s. }
$$
