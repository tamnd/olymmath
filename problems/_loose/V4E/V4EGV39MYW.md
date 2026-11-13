---
tag: V4EGV39MYW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h365250
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5169
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Kazakhstan National Olympiad
---
Let $n \geq 2$ be an integer. Define $x_i =1$ or $-1$ for every $i=1,2,3,\cdots, n$ .

Call an operation *adhesion*, if it changes the string $(x_1,x_2,\cdots,x_n)$ to $(x_1x_2, x_2x_3, \cdots ,x_{n-1}x_n, x_nx_1)$ .

Find all integers $n \geq 2$ such that the string $(x_1,x_2,\cdots, x_n)$ changes to $(1,1,\cdots,1)$ after finitely *adhesion* operations.
