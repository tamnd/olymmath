---
tag: FHBMQ9QK45
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Sharygin Geometry Olympiad
    url: https://artofproblemsolving.com/community/c6h3271038
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2124
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sharygin/2024
    source: hf-ai-mo-aops
    label: 2024 Sharygin Geometry Olympiad
---
Lines $a_1, b_1, c_1$ pass through the vertices $A, B, C$ respectively of a triange $ABC$ ; $a_2, b_2, c_2$ are the reflections of $a_1, b_1, c_1$ about the corresponding bisectors of $ABC$ ; $A_1 = b_1 \cap c_1, B_1 = a_1 \cap c_1, C_1 = a_1 \cap b_1$ , and $A_2, B_2, C_2$ are defined similarly. Prove that the triangles $A_1B_1C_1$ and $A_2B_2C_2$ have the same ratios of the area and circumradius (i.e. $\frac{S_1}{R_1} = \frac{S_2}{R_2}$ , where $S_i = S(\triangle A_iB_iC_i)$ , $R_i = R(\triangle A_iB_iC_i)$ )
