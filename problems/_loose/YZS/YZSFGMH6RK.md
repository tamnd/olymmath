---
tag: YZSFGMH6RK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h2468204
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20553
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan Mathematics Olympiad
---
Find all integers $n=2k+1>1$ so that there exists a permutation $a_0, a_1,\ldots,a_{k}$ of $0, 1, \ldots, k$ such that
$$a_1^2-a_0^2\equiv a_2^2-a_1^2\equiv \cdots\equiv a_{k}^2-a_{k-1}^2\pmod n.$$

*Proposed by usjl*
