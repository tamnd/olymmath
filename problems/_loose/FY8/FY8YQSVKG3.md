---
tag: FY8YQSVKG3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734482
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16842
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Three non-collinear lattice points $A,B,C$ lie on the plane $1+3x+5y+7z=0$ . The minimal possible area of triangle $ABC$ can be expressed as $\frac{\sqrt{m}}{n}$ where $m,n$ are positive integers such that there does not exists a prime $p$ dividing $n$ with $p^2$ dividing $m$ . Compute $100m+n$ .

*Proposed by Yannick Yao*
