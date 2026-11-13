---
tag: GDTDGW456T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r$ be a real such that $0<r\leq 1$. Denote by $V(r)$ the volume of the solid formed by all points of $(x,\ y,\ z)$ satisfying
$$x^2+y^2+z^2\leq 1,\ x^2+y^2\leq r^2$$
in $xyz$-space.

(1) Find $V(r)$.

(2) Find $\lim_{r\rightarrow 1-0} \frac{V(1)-V(r)}{(1-r)^{\frac 32}}.$

(3) Find $\lim_{r\rightarrow +0} \frac{V(r)}{r^2}.$
