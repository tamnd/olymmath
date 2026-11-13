---
tag: QE8VMJWX9N
kind: problem
type: answer
answer: f(x)=1+\log_{2015}x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the function $f:(0,+\infty) \rightarrow \mathbb{R}$ with the property:

$$
f\left(\frac{x}{2015}\right) \leq \log _{2015} x \leq f(x)-1, \forall x \in(0,+\infty)
$$
