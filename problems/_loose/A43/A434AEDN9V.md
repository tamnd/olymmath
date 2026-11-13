---
tag: A434AEDN9V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h257527
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79224
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/1985
    source: hf-ai-mo-aops
    label: 1985 Vietnam National Olympiad
---
Let $ a$ , $ b$ and $ m$ be positive integers. Prove that there exists a positive integer $ n$ such that $ (a^n - 1)b$ is divisible by $ m$ if and only if $ \gcd (ab, m) = \gcd (b, m)$ .
