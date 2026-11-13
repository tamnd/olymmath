---
tag: DNK644JXP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286710
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44768
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1997
    source: hf-ai-mo-aops
    label: 1997 Irish Math Olympiad
---
Given a positive integer $ n$ , denote by $ \sigma (n)$ the sum of all positive divisors of $ n$ . We say that $ n$ is $ abundant$ if $ \sigma (n)>2n.$ (For example, $ 12$ is abundant since $ \sigma (12)=28>2 \cdot 12$ .) Let $ a,b$ be positive integers and suppose that $ a$ is abundant. Prove that $ ab$ is abundant.
