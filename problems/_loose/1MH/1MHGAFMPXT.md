---
tag: 1MHGAFMPXT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1065735
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12861
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2015
    source: hf-ai-mo-aops
    label: 2015 NIMO Problems
---
Let $ABC$ be a non-degenerate triangle with incenter $I$ and circumcircle $\Gamma$ . Denote by $M_a$ the midpoint of the arc $\widehat{BC}$ of $\Gamma$ not containing $A$ , and define $M_b$ , $M_c$ similarly. Suppose $\triangle ABC$ has inradius $4$ and circumradius $9$ . Compute the maximum possible value of $$IM_a^2+IM_b^2+IM_c^2.$$*Proposed by David Altizio*
