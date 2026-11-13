---
tag: WAYPYRZ5P4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ISL
    url: https://artofproblemsolving.com/community/c6h3610439
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25629
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2024
    source: hf-ai-mo-aops
    label: 2024 ISL
  - at: isl/2024
    source: hf-mathnet
    label: IMO IMO2024 Shortlisted Problems
---
Let $ABC$ be an acute triangle with $AB < AC$ , and let $\Gamma$ be the circumcircle of $ABC$ . Points $X$ and $Y$ lie on $\Gamma$ so that $XY$ and $BC$ meet on the external angle bisector of $\angle BAC$ . Suppose that the tangents to $\Gamma$ at $X$ and $Y$ intersect at a point $T$ on the same side of $BC$ as $A$ , and that $TX$ and $TY$ intersect $BC$ at $U$ and $V$ , respectively. Let $J$ be the centre of the excircle of triangle $TUV$ opposite the vertex $T$ .

Prove that $AJ$ bisects $\angle BAC$ .
