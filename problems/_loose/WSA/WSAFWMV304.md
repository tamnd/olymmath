---
tag: WSAFWMV304
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734486
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16846
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218485
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
Compute the largest possible number of distinct real solutions for $x$ to the equation $$x^6+ax^5+60x^4-159x^3+240x^2+bx+c=0,$$ where $a$ , $b$ , and $c$ are real numbers.

*Proposed by Tristan Shin
