---
tag: BDH8FBVBDD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33760
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Pratt's Lemma, [93].) Let $\xi, \eta, \zeta$ and $\xi_{n}, \eta_{n}, \zeta_{n}, n \geqslant 1$, be random variables such that $\eta_{n} \leqslant \xi_{n} \leqslant \zeta_{n}$ for all $n$,

$$
\xi_{n} \stackrel{p}{\rightarrow} \xi, \eta_{n} \xrightarrow{p} \eta, \zeta_{n} \stackrel{p}{\rightarrow} \zeta, \mathrm{E} \eta_{n} \rightarrow \mathrm{E} \eta, \mathrm{E} \zeta_{n} \rightarrow \mathrm{E} \zeta
$$

and the expectations $\mathrm{E} \xi, \mathrm{E} \eta, \mathrm{E} \zeta$ are finite. Show that $\mathrm{E} \xi_{n} \rightarrow \mathrm{E} \xi$ and that

$$
\mathrm{E}\left|\xi_{n}-\xi\right| \rightarrow 0 \Leftrightarrow \mathrm{E}\left|\eta_{n}-\eta\right| \rightarrow 0, \mathrm{E}\left|\zeta_{n}-\zeta\right| \rightarrow 0
$$
