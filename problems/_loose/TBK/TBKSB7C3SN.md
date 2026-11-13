---
tag: TBKSB7C3SN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2016
    url: https://artofproblemsolving.com/community/c6h3056864
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57187
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2016
    source: hf-ai-mo-aops
    label: Russian TST 2016
---
The scalene triangle $ABC$ has incenter $I{}$ and circumcenter $O{}$ . The points $B_A$ and $C_A$ are the projections of the points $B{}$ and $C{}$ onto the line $AI$ . A circle with a diameter $B_AC_A$ intersects the line $BC$ at the points $K_A$ and $L_A$ .
[list=i]

- Prove that the circumcircle of the triangle $AK_AL_A$ touches the incircle of the triangle $ABC$ at some point $T_A$ .

- Define the points $T_B$ and $T_C$ analogously. Prove that the lines $AT_A,BT_B$ and $CT_C$ intersect on the line $OI$ .
