---
tag: RTTJ4EP1QV
kind: problem
type: answer
answer: a_{n}=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(a_{n}\right)$ with the first term $a_{1}=1$ and defined by the following relation: For any positive integer $n$,

$$
a_{n}=a_{\left\lfloor\frac{n}{2}\right\rfloor}+a_{\left\lceil\frac{n}{2}\right\rceil}
$$

Express $a_{n}$ as a function of $n$.
