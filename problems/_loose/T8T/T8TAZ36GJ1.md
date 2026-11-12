---
tag: T8TAZ36GJ1
kind: problem
type: answer
answer: f(x)=\frac{4x^{2}-x+1}{5(x-1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f(x)$ that are defined for all $x \neq 0, \pm 1$ and satisfy the relation

$$
x f(x) + 2 f\left(\frac{x-1}{x+1}\right) = 1
$$
