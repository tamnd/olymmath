---
tag: AXB1C8V6NG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1251136
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14683
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Romania Team Selection Test
---
Given a prime $p$ , prove that the sum $\sum_{k=1}^{\lfloor \frac{q}{p} \rfloor}{k^{p-1}}$ is not divisible by $q$ for all but finitely many primes $q$ .
