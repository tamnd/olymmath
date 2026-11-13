---
tag: P785BJTSG0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1578497
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16424
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2018
    source: hf-ai-mo-aops
    label: 2018 China Team Selection Test
---
Given a triangle $ABC$ . $D$ is a moving point on the edge $BC$ . Point $E$ and Point $F$ are on the edge $AB$ and $AC$ , respectively, such that $BE=CD$ and $CF=BD$ . The circumcircle of $\triangle BDE$ and $\triangle CDF$ intersects at another point $P$ other than $D$ . Prove that there exists a fixed point $Q$ , such that the length of $QP$ is constant.
