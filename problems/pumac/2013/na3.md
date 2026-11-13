---
tag: Y8TGVTDT1F
kind: problem
appearances:
  - at: pumac/2013/na3
    primary: true
  - at: pumac/2013/nb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10182
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be the greatest possible value of a product of positive integers that sums to $2014$ . Compute the sum of all bases and exponents in the prime factorization of $A$ . For example, if $A=7\cdot 11^5$ , the answer would be $7+11+5=23$ .
