---
tag: Q9HW4ZCG3M
kind: problem
type: answer
answer: f(x)=\frac{1}{2}(x+1-\frac{1}{x}-\frac{1}{1-x})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f(x)$ that are defined for $x \neq 1$ and satisfy the relation

$$
f(x) + f\left(\frac{1}{1-x}\right) = x
$$
