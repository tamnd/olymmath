---
tag: JQXRJ8E47P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any sequence of real numbers $(a_n), n \in N$, define a new sequence $(b_n)$ as $b_n =a_{n+2}+sa_{n+1}+ta_{n}$, where $s,t$ are given real numbers.
Find all ordered pairs $(s,t)$ satisfying the following property: any sequence $(a_n)$ converges as soon as the sequence $(b_n)$ converges.
