---
tag: C9G5YKKAZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h289403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3463
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Germany Team Selection Test
---
Let $ \left(a_n \right)_{n \in \mathbb{N}}$ defined by $ a_1 = 1,$ and $ a_{n + 1} = a^4_n - a^3_n + 2a^2_n + 1$ for $ n \geq 1.$ Show that there is an infinite number of primes $ p$ such that none of the $ a_n$ is divisible by $ p.$
