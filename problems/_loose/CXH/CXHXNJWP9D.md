---
tag: CXHXNJWP9D
kind: problem
type: answer
answer: "0.025"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a number $\mathrm{X}$ "20-supporting" if for any 20 real numbers $a_{1}, \ldots, a_{20}$, the sum of which is an integer, there exists at least one for which $\left|a_{i}-\frac{1}{2}\right| \geq X$.

In your answer, specify the largest 20-supporting X, rounded to the thousandths according to standard mathematical rules.
