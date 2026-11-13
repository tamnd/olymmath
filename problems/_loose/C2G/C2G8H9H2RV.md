---
tag: C2G8H9H2RV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h87922
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54570
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Romania Team Selection Test
---
Let $\gamma$ be the incircle in the triangle $A_0A_1A_2$ . For all $i\in\{0,1,2\}$ we make the following constructions (all indices are considered modulo 3): $\gamma_i$ is the circle tangent to $\gamma$ which passes through the points $A_{i+1}$ and $A_{i+2}$ ; $T_i$ is the point of tangency between $\gamma_i$ and $\gamma$ ; finally, the common tangent in $T_i$ of $\gamma_i$ and $\gamma$ intersects the line $A_{i+1}A_{i+2}$ in the point $P_i$ . Prove that

a) the points $P_0$ , $P_1$ and $P_2$ are collinear;

b) the lines $A_0T_0$ , $A_1T_1$ and $A_2T_2$ are concurrent.
