---
tag: 5EXWEHWPT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2020
    url: https://artofproblemsolving.com/community/c6h3029521
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26576
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2020
    source: hf-ai-mo-aops
    label: Kvant 2020
---
Determine the positive numbers $a{}$ for which the following statement true: for any function $f:[0,1]\to\mathbb{R}$ which is continuous at each point of this interval and for which $f(0)=f(1)=0$ , the equation $f(x+a)-f(x)=0$ has at least one solution.

*Proposed by I. Yaglom*
