---
tag: 7GG6ZMKCP8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\eta$ be random variables with correlation coefficient $\rho$. Show the validity of the following two-dimensional analogue of Chebyshev's inequality:

$$
\mathrm{P}\{|\xi-\mathrm{E} \xi| \geqslant \varepsilon \sqrt{\mathrm{D} \xi} \text { or }|\eta-\mathrm{E} \eta| \geqslant \varepsilon \sqrt{\mathrm{D} \eta}\} \leqslant \frac{1}{\varepsilon^{2}}\left(1+\sqrt{1-\rho^{2}}\right) \text {. }
$$
