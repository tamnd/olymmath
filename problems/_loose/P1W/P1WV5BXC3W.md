---
tag: P1WV5BXC3W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221954
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Let $ABC$ be a triangle with incircle $(I)$, tangent to $BC$, $CA$, $AB$ at $D, E, F$ respectively. On the line $DF$, take points $M, P$ such that $CM \parallel AB$, $AP \parallel BC$. On the line $DE$, take points $N$, $Q$ such that $BN \parallel AC$, $AQ \parallel BC$. Denote $X$ as intersection of $PE$, $QF$ and $K$ as the midpoint of $BC$. Prove that if $AX = IK$ then $\angle BAC \le 60^o$.
