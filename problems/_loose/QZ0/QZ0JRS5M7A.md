---
tag: QZ0JRS5M7A
kind: problem
type: answer
answer: x_{1}=-(y+z),x_{2}=-(\omegay+\omega^{2}z),x_{3}=-(\omega^{2}y+\omegaz)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation $x^{3}+p x+q=0$, using the identity

$x^{3}+y^{3}+z^{3}-3 x y z=(x+y+z)\left(x+\omega y+\omega^{2} z\right)\left(x+\omega^{2} y+\omega z\right)$, where $\omega^{2}+\omega+1=0$. (Choose $y$ and $z$ such that $-3 y z=p$ and $\left.y^{3}+z^{3}=q.\right)$
