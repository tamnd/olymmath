---
tag: TF81FTR9C1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128910
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Laura won the local math olympiad and was awarded a "magical" ruler. With it, she can draw (as usual) lines in the plane, and she can also measure segments and replicate them anywhere in the plane. She can also divide a segment into as many equal parts as she wishes; for instance, she can divide any segment into 17 equal parts. Laura drew a parallelogram $A B C D$ and decided to try out her magical ruler. With it, she found the midpoint $M$ of side $C D$, and she extended side $C B$ beyond $B$ to point $N$ so that segments $C B$ and $B N$ were equal in length. Unfortunately, her mischievous little brother came along and erased everything on Laura's picture except for points $A, M$ and $N$. Using Laura's magical ruler, help her reconstruct the original parallelogram $A B C D$ : write down the steps that she needs to follow and prove why this will lead to reconstructing the original parallelogram $A B C D$.
