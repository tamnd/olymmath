---
tag: BQXW5CM9Q5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $f(x)$ is a function defined on the set of positive integers $\mathbf{N}^{+}$, satisfying $f(1)=\frac{3}{2}$, and for any $x, y \in \mathrm{N}^{+}$, we have
$$
f(x+y) \geqslant\left(1+\frac{y}{x+1}\right) f(x)+\left(1+\frac{x}{y+1}\right) f(y)+x^{2} y+x y+x y^{2}
$$

Prove: $f(x) \geqslant \frac{1}{4} x(x+1)(2 x+1), x \in \mathbf{N}^{+}$.
