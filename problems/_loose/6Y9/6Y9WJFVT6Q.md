---
tag: 6Y9WJFVT6Q
kind: problem
type: answer
answer: '|K_A L_A| = |K_B L_B| + |K_C L_C|'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ABC$ triangle with $|AB|<|BC|<|CA|$ has the incenter $I$. The orthocenters of triangles $IBC, IAC$ and $IAB$ are $H_A, H_A$ and $H_A$. $H_BH_C$ intersect $BC$ at $K_A$ and perpendicular line from $I$ to $H_BH_B$ intersect $BC$ at $L_A$. $K_B, L_B, K_C, L_C$ are defined similarly. Prove that
$$|K_AL_A|=|K_BL_B|+|K_CL_C|$$
