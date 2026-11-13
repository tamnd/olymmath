---
tag: ERVXNVMAZ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is known that if the derivative of the function $f(x)$ at the point $x_{0}$ changes sign - more precisely, it transitions from positive to negative (i.e., there exists a $\delta>0$ such that $f$ is differentiable in the interval $\left(x_{0}-\delta, x_{0}+\delta\right)$, and for $x_{0}-\delta<x<x_{0}$, $f'(x)>0$, and for $x_{0}<x<x_{0}+\delta$, $f'(x)<0$).

Show with an example that the change of sign of the derivative is not a necessary condition for the existence of a maximum, i.e., provide a differentiable function in the interval $(-1,1)$ that has a maximum at 0, and whose derivative does not change sign at 0.
