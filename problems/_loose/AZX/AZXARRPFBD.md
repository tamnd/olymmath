---
tag: AZXARRPFBD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1144939
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14446
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
Suppose $a$ , $b$ , $c$ , and $d$ are positive real numbers which satisfy the system of equations $$\begin{aligned} a^2+b^2+c^2+d^2 &= 762, ab+cd &= 260, ac+bd &= 365, ad+bc &= 244. \end{aligned}$$ Compute $abcd.$ *Proposed by Michael Tang*
