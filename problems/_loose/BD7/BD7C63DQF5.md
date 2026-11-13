---
tag: BD7C63DQF5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)=\log _{a} x(a>0$ and $a \neq 1)$, if $x_{1}, x_{2} \in \mathbf{R}^{+}$, determine the relationship between $\frac{1}{2}\left[f\left(x_{1}\right)+f\left(x_{2}\right)\right]$ and $f\left(\frac{x_{1}+x_{2}}{2}\right)$, and prove it.
1. $f(x)=\log _{a} x$ is a convex function when $a>1$, then $\frac{1}{2}\left[f\left(x_{1}\right)+f\left(x_{2}\right)\right] \leqslant f\left(\frac{x_{1}+x_{2}}{2}\right)$; when $0<a<1$, it is a concave function, then $\frac{1}{2}\left[f\left(x_{1}\right)+f\left(x_{2}\right)\right] \geqslant f\left(\frac{x_{1}+x_{2}}{2}\right)$.
