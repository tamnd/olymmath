---
tag: SC1N1X0S0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203947
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $ABC$ is a triangle, points $A_i, B_i, C_i \hspace{0.15cm} (i \in \{1,2,3\})$ and $O_A, O_B, O_C$ satisfy the following criteria:

a) $ABB_1A_2, BCC_1B_2, CAA_1C_2$ are rectangles not containing any interior points of the triangle $ABC$,
b) $ \frac{AB}{BB_1} = \frac{BC}{CC_1} = \frac{CA}{AA_1}$,
c) $AA_1A_3A_2, BB_1B_3B_2, CC_1C_3C_2$ are parallelograms, and
d) $O_A$ is the centroid of rectangle $BCC_1B_2$, $O_B$ is the centroid of rectangle $CAA_1C_2$, and $O_C$ is the centroid of rectangle $ABB_1A_2$.

Prove that $A_3O_A, B_3O_B,$ and $C_3O_C$ concur at a point.

*Proposed by Farras Mohammad Hibban Faddila*
