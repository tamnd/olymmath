---
tag: RFKWQT54SK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3489202
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2161
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo/2024
    source: hf-ai-mo-aops
    label: 2024 South Africa National Olympiad
  - at: za-samo
    source: hf-mathnet
    label: South Africa The South African Mathematical Olympiad Third Round
---
Consider three circles $\Gamma_1$ , $\Gamma_2$ , and $\Gamma_3$ , with centres $O_1$ , $O_2$ and $O_3$ , respectively, such that each pair of circles is externally tangent.
Suppose we have another circle $\Gamma$ with centre $O$ on the line segment $O_1O_3$ such that $\Gamma_1$ , $\Gamma_2$ and $\Gamma_3$ are each internally tangent to $\Gamma$ .

Show that $\angle O_1O_2O_3$ measures less than $90^\circ$ .
