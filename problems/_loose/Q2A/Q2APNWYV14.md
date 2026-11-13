---
tag: Q2APNWYV14
kind: problem
type: answer
answer: k^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ locks numbered $1,2, \cdots, n$, all of which are initially locked. Now, a series of operations $T_{1}, T_{2}, \cdots, T_{n}$ are performed sequentially, where operation $T_{k}(1 \leqslant k \leqslant n)$ only changes the state of the locks whose numbers are multiples of $k$. After $n$ operations, which locks are open?
