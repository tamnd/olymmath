---
tag: EQKDD1TS3A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h79284
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25243
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
Let triangle $ABC$ be such that its circumradius is $R = 1.$ Let $r$ be the inradius of $ABC$ and let $p$ be the inradius of the orthic triangle $A'B'C'$ of triangle $ABC.$ Prove that $$ p \leq 1 - \frac{1}{3 \cdot (1+r)^2}. $$
