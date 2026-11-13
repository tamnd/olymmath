---
tag: XRCDYDNA6X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h390699
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5937
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
Assume that $P(x)$ is a polynomial with integer non negative coefficients, different from constant. Baron Munchausen claims that he can restore $P(x)$ provided he knows the values of $P(2)$ and $P(P(2))$ only. Is the baron's claim valid?
