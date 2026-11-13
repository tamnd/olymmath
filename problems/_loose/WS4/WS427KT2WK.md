---
tag: WS427KT2WK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the function $f(n)$ on the set of positive integers as follows:
$f(n)=\left\{\begin{array}{ll}\frac{n}{2}, & \text { when } n \text { is even, } \\ n+3, & \text { when } n \text { is odd. }\end{array}\right.$
(1) Prove that for any positive integer $m$, the sequence $a_{0}=m, a_{1}=f(m), \cdots, a_{n}=f\left(a_{n-1}\right), \cdots$ always contains a term that is 1 or 3.
(2) Among all positive integers, which $m$ make the above sequence necessarily contain 3? Which $m$ make the above sequence necessarily contain 1? (1979 National High School League Question)
