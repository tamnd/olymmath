---
tag: 7HBPWBZR5G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 China Girls Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3133458
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35485
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-gmo/2023
    source: hf-ai-mo-aops
    label: 2023 China Girls Math Olympiad
---
Let $P_i(x_i,y_i)\ (i=1,2,\cdots,2023)$ be $2023$ distinct points on a plane equipped with rectangular coordinate system. For $i\neq j$ , define $d(P_i,P_j) = |x_i - x_j| + |y_i - y_j|$ . Define $$ \lambda = \frac{\max_{i\neq j}d(P_i,P_j)}{\min_{i\neq j}d(P_i,P_j)} $$ .

Prove that $\lambda \geq 44$ and provide an example in which the equality holds.
