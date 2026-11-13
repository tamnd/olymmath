---
tag: KJRYVFY7N3
kind: problem
type: answer
answer: "36"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all $t>0$, consider the sum $S=r_{1}^{2}+r_{2}^{2}+r_{3}^{2}+r_{4}^{2}$, where $r_{1}, r_{2}, r_{3}, r_{4}$ are the roots of the polynomial

$$
P_{t}[X]=\frac{1}{t} X^{4}+\left(1-\frac{10}{t}\right) X^{3}-2 X^{2}+\sqrt[3]{2 t} X+\arctan (t)
$$

What is the minimum value of $|S|$ and for which $t$ is it achieved?
