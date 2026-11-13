---
tag: CDT2R2GB5V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610449
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2625
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Germany Team Selection Test
  - at: isl/2024
    source: hf-mathnet
    label: IMO IMO2024 Shortlisted Problems
---
Let $ABC$ be a triangle with $AB<AC<BC$ , and let $D$ be a point in the interior of segment $BC$ . Let $E$ be a point on the circumcircle of triangle $ABC$ such that $A$ and $E$ lie on opposite sides of the line $BC$ and $\angle{BAD}=\angle{EAC}$ . Let $I,I_B,I_C,J_B$ and $J_C$ be the incenters of triangles $ABC,ABD,ADC,ABE$ , and $AEC$ , respectively. Prove that $I_B,I_C,J_B$ , and $J_C$ are concyclic if and only if $AI,I_BJ_C$ , and $J_BI_C$ concur.

*Proposed by Haozhe Yang, Canada*
