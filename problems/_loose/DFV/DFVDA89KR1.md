---
tag: DFVDA89KR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471692
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70577
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
Suppose $f$ is a degree 42 polynomial such that for all integers $0\le i\le 42$ , $$ f(i)+f(43+i)+f(2\cdot43+i)+\cdots+f(46\cdot43+i)=(-2)^i $$ Find $f(2021)-f(0)$ .

*Proposed by Adam Bertelli*
