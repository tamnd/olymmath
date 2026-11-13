---
tag: FF9QB0MMB1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $d$, define the sequence $\left\{a_{n}\right\}$:
$a_{0}=1, a_{n+1}=\left\{\begin{array}{ll}\frac{a_{n}}{2}, & a_{n} \text { is even; } \\ a_{n}+d, & a_{n} \text { is odd. }\end{array}\right.$
Find all integers $d$ such that there exists
$$
n>0, a_{n}=1 \text {. }
$$
