---
tag: 6VC71F2MSY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h7812
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25317
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226085
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1996
    source: hf-ai-mo-aops
    label: 1996 IMO Shortlist
---
Suppose that $a, b, c > 0$ such that $abc = 1$ . Prove that $$ \frac{ab}{ab + a^5 + b^5} + \frac{bc}{bc + b^5 + c^5} + \frac{ca}{ca + c^5 + a^5} \leq 1. $$
