---
tag: 5JQS7JXWKY
kind: problem
type: answer
answer: "251000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the fact that Pythagorean triples have the form

$$
\left(x y, \frac{x^{2}-y^{2}}{2}, \frac{x^{2}+y^{2}}{2}\right), x>y
$$

where $x$ and $y$ are natural numbers with the same parity, determine which right triangle with integer sides and one leg of 1000 has:

a) the largest perimeter;

b) the smallest area.
