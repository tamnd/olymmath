---
tag: 9MJ0EANYAJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1225760
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13831
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
For all integers $n\geq 2$ , let $f(n)$ denote the largest positive integer $m$ such that $\sqrt[m]{n}$ is an integer. Evaluate $$f(2)+f(3)+\cdots+f(100).$$
