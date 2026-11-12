---
tag: B77XXYN97X
kind: problem
type: answer
answer: x_{1}=\frac{1+\sqrt{5}}{2},x_{2}=\frac{1-\sqrt{5}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation

$$
1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\cdot}} \cdot \cdot_{1+\frac{1}{x}}}=x
$$

(in the expression on the left, the fraction sign repeats $n$ times).
