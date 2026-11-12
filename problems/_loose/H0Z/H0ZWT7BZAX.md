---
tag: H0ZWT7BZAX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2887866
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Germany Team Selection Test
---
Given a triangle $ABC$ and three circles $x$ , $y$ and $z$ such that $A \in y \cap z$ , $B \in z \cap x$ and $C \in x \cap y$ .

The circle $x$ intersects the line $AC$ at the points $X_b$ and $C$ , and intersects the line $AB$ at the points $X_c$ and $B$ .
The circle $y$ intersects the line $BA$ at the points $Y_c$ and $A$ , and intersects the line $BC$ at the points $Y_a$ and $C$ .
The circle $z$ intersects the line $CB$ at the points $Z_a$ and $B$ , and intersects the line $CA$ at the points $Z_b$ and $A$ .
(Yes, these definitions have the symmetries you would expect.)

Prove that the perpendicular bisectors of the segments $Y_a Z_a$ , $Z_b X_b$ and $X_c Y_c$ concur.
