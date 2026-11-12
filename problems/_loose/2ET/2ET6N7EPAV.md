---
tag: 2ET6N7EPAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X_{1}, \ldots, X_{n}$ be positive i.i.d. random variables, $\mathrm{E} X_{1}, \mathrm{E} X_{1}^{-1}<\infty$ and $S_{m}=X_{1}+\ldots+X_{m}, 1 \leqslant m \leqslant n$. Show that

$$
E S_{n}^{-1} \leqslant \frac{E X_{1}^{-1}}{n}, E X_{1} S_{n}^{-1}=\frac{1}{n},
$$

and also that for $m \leqslant n$ the following equalities hold:

$$
\mathrm{E} S_{m} S_{n}^{-1}=\frac{m}{n}, \mathrm{E} S_{n} S_{m}^{-1}=1+(n-m) \mathrm{E} X_{1} \mathrm{E} S_{m}^{-1}
$$
