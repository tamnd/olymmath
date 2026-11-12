---
tag: Q5JRZJ3FG8
kind: problem
type: answer
answer: x_{1}=-7,x_{2}=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Multiplying the first and fourth, and the second and third factors, we get the equation: $\left(x^{2}+5 x+4\right)\left(x^{2}+5 x+6\right)=360$.

By making the substitution $y=x^{2}+5 x+4$, we get $y^{2}+2 y-360=0$, from which $y_{1}=-20$, $y_{2}=18$. Therefore, we have the equations:

$x^{2}+5 x+24=0, x^{2}+5 x-14=0$

The first equation has no solutions, from the second we get: $x_{1}=-7, x_{2}=2$.
