---
tag: C0WPSKADVV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2047487
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61114
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Taiwan TST Round 1
---
Given a positive integer $ n $ , let $ A, B $ be two co-prime positive integers such that $$ \frac{B}{A} = \left(\frac{n\left(n+1\right)}{2}\right)!\cdot\prod\limits_{k=1}^{n}{\frac{k!}{\left(2k\right)!}} $$ Prove that $ A $ is a power of $ 2 $ .
