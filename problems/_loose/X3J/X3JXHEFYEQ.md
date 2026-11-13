---
tag: X3JXHEFYEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h499797
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8114
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2012
    source: hf-ai-mo-aops
    label: 2012 Iran MO (3rd Round)
---
We call the three variable polynomial $P$ cyclic if $P(x,y,z)=P(y,z,x)$ . Prove that cyclic three variable polynomials $P_1,P_2,P_3$ and $P_4$ exist such that for each cyclic three variable polynomial $P$ , there exists a four variable polynomial $Q$ such that $P(x,y,z)=Q(P_1(x,y,z),P_2(x,y,z),P_3(x,y,z),P_4(x,y,z))$ .

*Solution by Mostafa Eynollahzade and Erfan Salavati*
