---
tag: 8FC77FBAQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h225695
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44367
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Iran MO (3rd Round)
---
For each $ c\in\mathbb C$ , let $ f_c(z,0)=z$ , and $ f_c(z,n)=f_c(z,n-1)^2+c$ for $ n\geq1$ .
a) Prove that if $ |c|\leq\frac14$ then there is a neighborhood $ U$ of origin such that for each $ z\in U$ the sequence $ f_c(z,n),n\in\mathbb N$ is bounded.
b) Prove that if $ c>\frac14$ is a real number there is a neighborhood $ U$ of origin such that for each $ z\in U$ the sequence $ f_c(z,n),n\in\mathbb N$ is unbounded.
