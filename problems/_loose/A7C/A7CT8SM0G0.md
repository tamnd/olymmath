---
tag: A7CT8SM0G0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $z=f(x, y)=x^{2}+y^{2}+2 x+1$ and two points $A\left(x_{0}, y_{0}\right)=A(2,3)$ and $B\left(x_{1}, y_{1}\right)=B(2.02,2.99)$. It is required:

1) to compute the value $z_{0}$ of the function $f(x, y)$ at point $A$ and the value $z_{1}$ at point $B$;
2) to compute the approximate value $\tilde{z}_{1}$ of the function at point $B$, based on the value $z_{0}$ of the function at point $A$, by replacing the increment of the function with its differential, and to estimate the relative error in percent that arises from replacing the increment of the function with its differential;
3) to derive the equation of the tangent plane to the surface $z=f(x, y)$ at point $C\left(x_{0}, y_{0}, z_{0}\right)$
