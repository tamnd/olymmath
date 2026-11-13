---
tag: D21R8DP6PD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1220604
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2009
    source: hf-ai-mo-aops
    label: 2009 Belarusian National Olympiad
---
Let $P(x), Q(x)$ be non-constant polynomials with integer coefficients. It is known that polynomial $P(x)Q(x)-2009$ has at least $25$ distinct integer roots. Prove that the degree of each polynomial $P(x)$ and $Q(x)$ is qreater than $2$ .
