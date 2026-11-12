---
tag: 7D1J62ZTPX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the following fundamental result about the structure of distribution functions: each such function $F=F(x)$ can be represented as

$$
F=\alpha_{1} F_{\mathrm{d}}+\alpha_{2} F_{\mathrm{abc}}+\alpha_{3} F_{\mathrm{sc}}
$$

where $\alpha_{i} \geqslant 0, \alpha_{1}+\alpha_{2}+\alpha_{3}=1$,

$F_{\mathrm{d}}$ - a discrete distribution function with jumps at certain points $x^{k}$ :

$$
F_{\mathrm{d}}(x)=\sum_{\left\{k: x \geqslant x_{k}\right\}}\left[F_{\mathrm{d}}\left(x_{k}\right)-F_{\mathrm{d}}\left(x_{k}-\right)\right]
$$

$F_{\mathrm{abc}}$ - an absolutely continuous distribution function, i.e.,

$$
F_{\mathrm{abc}}(x)=\int_{-\infty}^{x} f(y) d y
$$

where (density) $f=f(x)$ is a non-negative Borel function, integrable in the Lebesgue sense, and $\int_{\mathbb{R}} f(x) d x=1$,

$F_{\mathrm{sc}}$ - a singular distribution function, i.e., a continuous distribution function, the set of points of growth of which has Lebesgue measure zero.

What can be said about the uniqueness of the given representation?
