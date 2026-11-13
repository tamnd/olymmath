---
tag: P1SQP8K8DA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Singapore MO Open
    url: https://artofproblemsolving.com/community/c6h3371488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59338
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2024
    source: hf-ai-mo-aops
    label: 2024 Singapore MO Open
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
In triangle $ABC$ , $\angle B=90^\circ$ , $AB>BC$ , and $P$ is the point such that $BP=BC$ and $\angle APB=90^\circ$ , where $P$ and $C$ lie on the same side of $AB$ . Let $Q$ be the point on $AB$ such that $AP=AQ$ , and let $M$ be the midpoint of $QC$ . Prove that the line through $M$ parallel to $AP$ passes through the midpoint of $AB$ .
