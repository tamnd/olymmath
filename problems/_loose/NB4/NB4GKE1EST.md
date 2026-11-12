---
tag: NB4GKE1EST
kind: problem
type: answer
answer: (0,\frac{1}{2}),(0,-\frac{1}{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Grouping the terms, we get: $\left(4 y^{2}+1\right)\left(x^{4}+2 x^{2}+2\right)=8|y|\left(x^{2}+1\right)$.

Obviously, there are no solutions when $y=0$. Dividing both sides by $2|y|\left(x^{2}+1\right)$:

$$
\left(2|y|+\frac{1}{2|y|}\right)\left(x^{2}+1+\frac{1}{x^{2}+1}\right)=4
$$

It is known ${ }^{1}$ (easy to show) that if $a>0$, then $a+\frac{1}{a} \geq 2$, and equality is achieved only if $a=1$. Therefore, the right side equals 4 only if $2|y|=1$ and $x^{2}+1=1$.
