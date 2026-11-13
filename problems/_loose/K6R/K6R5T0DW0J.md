---
tag: K6R5T0DW0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1352382
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15494
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217200
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2017
    source: hf-ai-mo-aops
    label: 2017 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong HKG TST
---
Let $ABCDEF$ be a convex hexagon such that $\angle ACE = \angle BDF$ and $\angle BCA = \angle EDF$ . Let $A_1=AC\cap FB$ , $B_1=BD\cap AC$ , $C_1=CE\cap BD$ , $D_1=DF\cap CE$ , $E_1=EA\cap DF$ , and $F_1=FB\cap EA$ . Suppose $B_1, C_1, D_1, F_1$ lie on the same circle $\Gamma$ . The circumcircles of $\triangle BB_1F_1$ and $ED_1F_1$ meet at $F_1$ and $P$ . The line $F_1P$ meets $\Gamma$ again at $Q$ . Prove that $B_1D_1$ and $QC_1$ are parrallel. (Here, we use $l_1\cap l_2$ to denote the intersection point of lines $l_1$ and $l_2$ )
