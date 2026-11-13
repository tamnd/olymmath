---
tag: YFNSHXGN98
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of real numbers $a_{0}, a_{1}, \cdots$ satisfying $a_{i-1}+a_{i+1}=2 a_{i}(i=1,2, \cdots)$.
Prove: For any natural number $n$, we have
$$
f(x)=\sum_{k=0}^{n} a_{k} \mathrm{C}_{n}^{k} x^{k}(1-x)^{n-k}
$$

is a linear polynomial or a constant in $x$.
(1986, National High School Mathematics Joint Competition)
