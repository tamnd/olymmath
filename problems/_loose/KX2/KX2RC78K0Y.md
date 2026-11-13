---
tag: KX2RC78K0Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1065732
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12859
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214767
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2015
    source: hf-ai-mo-aops
    label: 2015 NIMO Problems
---
A function $f$ from the positive integers to the nonnegative integers is defined recursively by $f(1) = 0$ and $f(n+1) = 2^{f(n)}$ for every positive integer $n$ . What is the smallest $n$ such that $f(n)$ exceeds the number of atoms in the observable universe (approximately $10^{80}$ )?

*Proposed by Evan Chen*
