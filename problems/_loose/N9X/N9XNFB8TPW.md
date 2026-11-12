---
tag: N9XNFB8TPW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable with distribution function $F=F(x)$, satisfying the Lipschitz condition:

$$
|F(x)-F(y)| \leqslant L|x-y|, x, y \in \mathbb{R},
$$

for some constant $L>0$. Show that $X$ has a density $f=f(x)$ and for almost all $x \in \mathbb{R}$ (with respect to the Lebesgue measure) the inequality $f(x) \leqslant L$ holds.
