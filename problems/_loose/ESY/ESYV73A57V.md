---
tag: ESYV73A57V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Morocco TST
    url: https://artofproblemsolving.com/community/c6h479306
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48664
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244577
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
Let $\left ( a_{n} \right )_{n \geq 1}$ be an increasing sequence of positive integers such that $a_1=1$ , and for all positive integers $n$ , $a_{n+1}\leq 2n$ .
Prove that for every positive $n$ ; there exists positive integers $p$ and $q$ such that $n=a_{p}-a_{q}$ .
