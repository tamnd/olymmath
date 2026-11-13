---
tag: D5G7A1TSXV
kind: problem
type: answer
answer: f(n)=2+(1)+(1)(2)+\cdots+(1)(2)\cdots(n-2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(1)=1, f(2)=2$ and satisfy:
$$
f(n+2) \geqslant 2 f(n+1)-f(n), \forall n \in \mathbf{N}^{+} .
$$

Try to find $f(n)$.
