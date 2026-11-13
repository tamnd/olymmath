---
tag: GNHR8TAQFW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984784
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60486
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2004
    source: hf-ai-mo-aops
    label: 2004 Switzerland - Final Round
---
Given are $m\ge 3$ points in the plane. Prove that you can always choose three of these points $A,B,C$ such that $$ \angle ABC \le \frac{180^o}{m}. $$
