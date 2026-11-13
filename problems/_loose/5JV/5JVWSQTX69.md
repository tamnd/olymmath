---
tag: 5JVWSQTX69
kind: problem
type: answer
answer: "9765"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The doubling sum function is defined by
$$
D(a, n)=\overbrace{a+2 a+4 a+8 a+\ldots}^{n \text { terms }} .
$$

For example, we have
$$
D(5,3)=5+10+20=35
$$
and
$$
D(11,5)=11+22+44+88+176=341 .
$$

Determine the smallest positive integer $n$ such that for every integer $i$ between 1 and 6 , inclusive, there exists a positive integer $a_{i}$ such that $D\left(a_{i}, i\right)=n$.
