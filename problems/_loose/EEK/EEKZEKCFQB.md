---
tag: EEKZEKCFQB
kind: problem
type: answer
answer: b\geq(+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the real numbers $a$ and $b$ and the operation $\star$ on $\mathbf{R}$ defined by

$$
x \star y=x y-a(x+y)+b
$$

Show that the interval $(a, \infty)$ is a stable subset of $\mathbf{R}$ with respect to the operation $\star$ if and only if $b \geq a(a+1)$.
