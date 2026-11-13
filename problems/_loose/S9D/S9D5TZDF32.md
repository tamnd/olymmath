---
tag: S9D5TZDF32
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
1/2k For $n>1$, let $d_{t}(n)=d_{t-1}(d(n))=\cdots=d(d(d(\cdots d(n) \cdots))$.
Prove: The sequence
$$
d_{1}(n)=d(n), d_{2}(n), d_{3}(n), \cdots
$$

is eventually always 2. Also, for any given positive integer $m$, prove that there exists $n$ such that (1) it is 2 from the $m$-th term onwards.
