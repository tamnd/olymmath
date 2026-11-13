---
tag: NR3EK35J6Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164491
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence of letters $\mathrm{az}, \mathrm{AB} "$. Starting from this, new sequences of letters can be created by repeatedly applying the following four rules in any order.

I. If a sequence of letters already created ends with $B$, then a $C$ letter can be added to the end of the sequence.

II. If a sequence of letters already created starts with $A$, then the sequence of letters following the initial $A$ can be duplicated.

III. If a sequence of letters already created contains three consecutive $B$ letters, these three letters can be replaced by a single $C$ letter.

IV. If a sequence of letters already created contains two $C$ letters next to each other, these can be removed from the sequence.

Consider all sequences of letters that can be created in this way. Does the sequence "AC" appear among them?
