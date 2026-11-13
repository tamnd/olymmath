---
tag: PE04ZD4EC7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h490296
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8001
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210058
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2012
    source: hf-ai-mo-aops
    label: 2012 India IMO Training Camp
---
Let $S$ be a nonempty set of primes satisfying the property that for each proper subset $P$ of $S$ , all the prime factors of the number $\left(\prod_{p\in P}p\right)-1$ are also in $S$ . Determine all possible such sets $S$ .
