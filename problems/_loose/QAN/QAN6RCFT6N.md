---
tag: QAN6RCFT6N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Jury, Switzerland, 77). For a given increasing function $\mathrm{f}: \mathbf{R} \longrightarrow \mathbf{R}$, define the function $g(x, y)$ by the formula

$$
g(x, y)=\frac{f(x+y)-f(x)}{f(x)-f(x-y)}, x \in \mathbf{R}, y>0
$$

Suppose that for all $y>0$ when $x=0$ and for all $y \in(0 ;|x|]$ when $x \neq 0$, the inequalities

$$
2^{-1}<g(x, y)<2
$$

are satisfied. Prove that for all $x \in \mathbf{R}$ and all $y>0$ the estimates

$$
14^{-1}<g(x, y)<14
$$

hold.
