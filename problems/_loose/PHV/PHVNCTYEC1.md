---
tag: PHVNCTYEC1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Morocco TST
    url: https://artofproblemsolving.com/community/c6h1078990
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48660
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-tst/2012
    source: hf-ai-mo-aops
    label: 2012 Morocco TST
---
$a_1,…,a_n$ are real numbers such that $a_1+…+a_n=0$ and $|a_1|+…+|a_n|=1$ . Prove that : $$ |a_1+2a_2+…+na_n| \leq \frac{n-1}{2} $$
