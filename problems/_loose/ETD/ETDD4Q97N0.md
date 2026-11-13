---
tag: ETDD4Q97N0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2923351
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50633
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Peru MO (ONEM)
---
Assuming that each point of a straight line is painted red or blue, arbitrarily, show that it is always possible to choose three points $A, B$ and $C$ in such a way straight, that are painted the same color and that: $$ \frac{AB}{1}=\frac{BC}{2}=\frac{AC}{3}. $$
