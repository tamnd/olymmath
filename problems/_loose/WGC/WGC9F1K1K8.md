---
tag: WGC9F1K1K8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3371499
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59423
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2024
    source: hf-ai-mo-aops
    label: 2024 Singapore Senior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
In an acute triangle $ABC$ , $AC>AB$ , $D$ is the point on $BC$ such that $AD=AB$ . Let $\omega_1$ be the circle through $C$ tangent to $AD$ at $D$ , and $\omega_2$ the circle through $C$ tangent to $AB$ at $B$ . Let $F(\ne C)$ be the second intersection of $\omega_1$ and $\omega_2$ . Prove that $F$ lies on $AC$ .
