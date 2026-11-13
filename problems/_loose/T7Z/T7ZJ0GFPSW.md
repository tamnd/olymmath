---
tag: T7ZJ0GFPSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h534001
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7912
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2012
    source: hf-ai-mo-aops
    label: 2012 Greece National Olympiad
---
Let positive integers $p,q$ with $\gcd(p,q)=1$ such as $p+q^2=(n^2+1)p^2+q$ . If the parameter $n$ is a positive integer, find all possible couples $(p,q)$ .
