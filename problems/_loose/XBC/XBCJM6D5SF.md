---
tag: XBCJM6D5SF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Singapore MO Open
    url: https://artofproblemsolving.com/community/c6h3603850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59340
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2025
    source: hf-ai-mo-aops
    label: 2025 Singapore MO Open
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
In the triangle $ABC$ , $\angle B>90^\circ$ , the incircle touches the sides $BC$ and $CA$ at $D$ and $E$ , respectively. The lines $ED$ and $AB$ intersect at $P$ . The incircle of the triangle $AEP$ touches the sides $PE$ and $AP$ at $D_1$ and $E_1$ , respectively. The lines $E_1D_1$ and $AE$ intersect at $P_1$ . Suppose $P,C,E,B$ are concyclic. Prove that $BE$ is parallel to $PP_1$ .
