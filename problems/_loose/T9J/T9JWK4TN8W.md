---
tag: T9JWK4TN8W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1968 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368347
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25154
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1968
    source: hf-ai-mo-aops
    label: 1968 IMO Shortlist
---
If $a_i \ (i = 1, 2, \ldots, n)$ are distinct non-zero real numbers, prove that the equation
$$\frac{a_1}{a_1-x} + \frac{a_2}{a_2-x}+\cdots+\frac{a_n}{a_n-x} = n$$
has at least $n - 1$ real roots.
