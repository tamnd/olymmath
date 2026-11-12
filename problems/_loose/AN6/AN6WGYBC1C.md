---
tag: AN6WGYBC1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33744
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(X, \mathscr{X}, \mu)$ be a measurable space with measure $\mu$, and let $f=f(x)$, $g=g(x)$, and $h=h(x)$ be $\mathscr{X}$-measurable functions on $X$. Prove that for any such $p, q, r \geqslant 1$, where $p^{-1}+q^{-1}+r^{-1}=1$, the following inequality holds:

$$
\int_{X}|f g h| d \mu \leqslant\left(\int_{X}|f|^{p} d \mu\right)^{\frac{1}{p}}\left(\int_{X}|g|^{q} d \mu\right)^{\frac{1}{q}}\left(\int_{X}|h|^{r} d \mu\right)^{\frac{1}{r}}
$$

Allowing infinite values for the given integrals.
