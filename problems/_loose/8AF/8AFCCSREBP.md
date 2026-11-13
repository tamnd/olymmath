---
tag: 8AFCCSREBP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4348
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206532
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
Initially a number $6$ is written on a blackboard. At $n$ -th step an integer $k$ on the blackboard is replaced by $k+gcd(k,n)$ . Prove that at each step the number on the blackboard increases either by $1$ or by a prime number.
