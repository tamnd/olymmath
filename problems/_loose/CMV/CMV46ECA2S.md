---
tag: CMV46ECA2S
kind: problem
type: answer
answer: rx^{3}-^{2}-1=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two cubic equations. Let $a, b, c$ be the roots of the equation $x^{3} + q x + r = 0$. Write the equation whose roots are the numbers

$$
\frac{b+c}{a^{2}}, \frac{c+a}{b^{2}}, \frac{a+b}{c^{2}}
$$
