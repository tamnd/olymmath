---
tag: BW2SPKBC0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h75974
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48288
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2003
    source: hf-ai-mo-aops
    label: 2003 Moldova National Olympiad
---
For every natural number $n\geq{2}$ consider the following affirmation $P_n$ :
"Consider a polynomial $P(X)$ (of degree $n$ ) with real coefficients. If its derivative $P'(X)$ has $n-1$ distinct real roots, then there is a real number $C$ such that the equation $P(x)=C$ has $n$ real,distinct roots."
Are $P_4$ and $P_5$ both true? Justify your answer.
