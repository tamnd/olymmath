---
tag: SMRZZZ3B8A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h486707
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73980
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2007
    source: hf-ai-mo-aops
    label: 2007 Stanford Mathematics Tournament
---
Let $p, q$ be positive integers and let $x_{0}=0$ . Suppose $x_{n+1}=x_{n} + p + \sqrt{q^{2} + 4px_{n}}$ . Find an explicit formula for $x_{n}$ .
