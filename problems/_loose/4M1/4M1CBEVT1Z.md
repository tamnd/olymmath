---
tag: 4M1CBEVT1Z
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Verify that for any positive integer $a, \operatorname{with} a>1$, the equation

$$
\frac{1}{x}+\frac{1}{y}=\frac{1}{a}
$$

has at least three solutions of the form $(x, y)$, with $x$ and $y$ positive integers. For example, for $a=3$, the pairs $(6,6),(4,12)$ and $(12,4)$ are solutions.

b) Find the number of pairs of positive integers $(x, y)$ that are solutions to this equation when $a=2019$.
