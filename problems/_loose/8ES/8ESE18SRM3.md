---
tag: 8ESE18SRM3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610440
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2618
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=362
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
Let $ABCD$ be a quadrilateral with $AB$ parallel to $CD$ and $AB<CD$ . Lines $AD$ and $BC$ intersect at a point $P$ . Point $X$ distinct from $C$ lies on the circumcircle of triangle $ABC$ such that $PC=PX$ . Point $Y$ distinct from $D$ lies on the circumcircle of triangle $ABD$ such that $PD=PY$ . Lines $AX$ and $BY$ intersect at $Q$ .

Prove that $PQ$ is parallel to $AB$ .

*Proposed by Fedir Yudin, Mykhailo Shtandenko, and Anton Trygub, Ukraine*
