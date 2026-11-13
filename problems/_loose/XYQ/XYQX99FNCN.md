---
tag: XYQX99FNCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From $(a+b+c)\left(\frac{1}{a}+\frac{1}{b}+\frac{1}{c}\right) \geq 9,(\forall) a, b, c>0$ we obtain.

$\sum \frac{1}{\sqrt{x^{2}+y z+3}} \geq \frac{9}{\sqrt{x^{2}+y z+3}+\sqrt{y^{2}+z x+3}+\sqrt{z^{2}+x y+3}}$

It is sufficient to show that: $\sqrt{x^{2}+y z+3}+\sqrt{y^{2}+z x+3}+\sqrt{z^{2}+x y+3} \leq 9$....

$\sqrt{a}+\sqrt{b}+\sqrt{c} \leq \sqrt{3(a+b+c)},(\forall) a, b, c \geq 0$ and $x y+y z+z x \leq x^{2}+y^{2}+z^{2} \leq 9$, from which.

$\sqrt{x^{2}+y z+3}+\sqrt{y^{2}+z x+3}+\sqrt{z^{2}+x y+3} \leq \sqrt{3\left(x^{2}+y^{2}+z^{2}+x y+y z+z x+9\right)} \leq 9$
