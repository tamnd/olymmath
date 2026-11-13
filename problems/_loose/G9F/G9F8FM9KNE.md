---
tag: G9F8FM9KNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1152640
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14454
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216248
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
Given two positive integers $m$ and $n$ , we say that $m\mid\mid n$ if $m\mid n$ and $\gcd(m, n/m)=1$ . Compute the smallest integer greater than $$\sum_{d\mid 2016}\sum_{m\mid\mid d}\frac{1}{m}.$$

*Proposed by Michael Ren*
