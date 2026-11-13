---
tag: VMPNAX3E1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h1274240
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14825
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Taiwan TST Round 2
---
Let $x,y$ be positive real numbers such that $x+y=1$ .
Prove that $\frac{x}{x^2+y^3}+\frac{y}{x^3+y^2}\leq2(\frac{x}{x+y^2}+\frac{y}{x^2+y})$ .
