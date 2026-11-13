---
tag: CTK6YAG3R5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94010
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
This problem can be generalized as follows: Let $x, y, z$ be positive real numbers, and $x y z=1$. For $a \geqslant 1, n \geqslant 1$, we have
$$
\frac{x^{n}}{(a+y)(a+z)}+\frac{y^{n}}{(a+z)(a+x)}+\frac{z^{n}}{(a+x)(a+y)} \geqslant \frac{3}{(1+a)^{2}} \text {. }
$$

Equality holds if and only if $x=y=z=1$.
