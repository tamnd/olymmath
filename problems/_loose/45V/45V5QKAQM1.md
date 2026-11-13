---
tag: 45V5QKAQM1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 BMT Fall
    url: https://artofproblemsolving.com/community/c6h2753742
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70290
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2020
    source: hf-ai-mo-aops
    label: 2020 BMT Fall
---
Let $\eta \in [0, 1]$ be a relative measure of material absorbence. $\eta$ values for materials combined together are additive. $\eta$ for a napkin is $10$ times that of a sheet of paper, and a cardboard roll has $\eta = 0.75$ . Justin can create a makeshift cup with $\eta = 1$ using $50$ napkins and nothing else. How many sheets of paper would he need to add to a cardboard roll to create a makeshift cup with $\eta = 1$ ?
