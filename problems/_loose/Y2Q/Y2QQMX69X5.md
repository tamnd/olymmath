---
tag: Y2QQMX69X5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [84].) Let a concave function $f=f(x)$ be defined on $(0, \infty)$ such that the function $f\left(x^{-1}\right)$ is convex. Prove that the function $x f(x)$ is also convex and that $f$ is either strictly increasing or a constant.

Show that in the first case, for any positive random variable $\xi$, the following inequalities hold:

$$
\frac{1}{E \xi^{-1}} \leqslant f^{-1}(E f(\xi)) \leqslant E \xi \leqslant f^{-1}\left(\frac{E \xi f(\xi)}{E \xi}\right) \leqslant \frac{E \xi^{2}}{E \xi}
$$

where it is assumed that all mathematical expectations exist.
