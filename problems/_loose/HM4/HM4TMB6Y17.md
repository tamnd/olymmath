---
tag: HM4TMB6Y17
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Taiwan TST Round  2
    url: https://artofproblemsolving.com/community/c6h2048275
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61156
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Taiwan TST Round  2
---
Let $A,B,C$ be the midpoints of the three sides $B'C', C'A', A'B'$ of the triangle $A'B'C'$ respectively. Let $P$ be a point inside $\Delta ABC$ , and $AP,BP,CP$ intersect with $BC, CA, AB$ at $P_a,P_b,P_c$ , respectively. Lines $P_aP_b, P_aP_c$ intersect with $B'C'$ at $R_b, R_c$ respectively, lines $P_bP_c, P_bP_a$ intersect with $C'A'$ at $S_c, S_a$ respectively. and lines $P_cP_a, P_cP_b$ intersect with $A'B'$ at $T_a, T_b$ , respectively. Given that $S_c,S_a, T_a, T_b$ are all on a circle centered at $O$ .

Show that $OR_b=OR_c$ .
