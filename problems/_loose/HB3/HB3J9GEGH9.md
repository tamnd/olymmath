---
tag: HB3J9GEGH9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 AIME Problems
    url: https://artofproblemsolving.com/community/c6h65005
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=63873
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: aime
    source: hf-ai-mo-aops
    label: 2000 AIME Problems
---
Find the least positive integer $n$ such that $$ \frac 1{\sin 45^\circ\sin 46^\circ}+\frac 1{\sin 47^\circ\sin 48^\circ}+\cdots+\frac 1{\sin 133^\circ\sin 134^\circ}=\frac 1{\sin n^\circ}. $$
