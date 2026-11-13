---
tag: AHX4RCBY19
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are three circles $w_1, w_2, w_3$. Let $w_{i+1} \cap w_{i+2} = A_i, B_i$, where $A_i$ lies insides of $w_i$. Let $\gamma$ be the circle that is inside $w_1,w_2,w_3$ and tangent to the three said circles at $T_1, T_2, T_3$. Let $T_iA_{i+1}T_{i+2}$'s circumcircle and $T_iA_{i+2}T_{i+1}$'s circumcircle meet at $S_i$. Prove that the circumcircles of $A_iB_iS_i$ meet at two points. ($1 \le i \le 3$, indices taken modulo $3$)

If one of $A_i,B_i,S_i$ are collinear - the intersections of the other two circles lie on this line. Prove this as well.
