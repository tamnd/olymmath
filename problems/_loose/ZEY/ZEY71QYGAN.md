---
tag: ZEY71QYGAN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204507
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ is acute angled triangle and $K,L$ is points on $AC,BC$ respectively such that $\angle{AKB}=\angle{ALB}$. $P$ is intersection of $AL$ and $BK$ and $Q$ is the midpoint of segment $KL$. Let $T,S$ are the intersection $AL,BK$ with $(ABC)$ respectively. Prove that $TK,SL,PQ$ are concurrent.
