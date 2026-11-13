---
tag: B4NKJMJ2AM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 China Western Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h237268
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36540
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo/2008
    source: hf-ai-mo-aops
    label: 2008 China Western Mathematical Olympiad
---
Given an integer $ m\geq 2$ , and two real numbers $ a,b$ with $ a > 0$ and $ b\neq 0$ . The sequence $ \{x_n\}$ is such that $ x_1 = b$ and $ x_{n + 1} = ax^{m}_{n} + b$ , $ n = 1,2,...$ . Prove that
(1)when $ b < 0$ and m is even, the sequence is bounded if and only if $ ab^{m - 1}\geq - 2$ ;
(2)when $ b < 0$ and m is odd, or when $ b > 0$ the sequence is bounded if and only if $ ab^{m - 1}\geq\frac {(m - 1)^{m - 1}}{m^m}$ .
