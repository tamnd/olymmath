---
tag: EST94TCA9Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208941
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=69
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 46th Mongolian Mathematical Olympiad
---
We are given an acute triangle $ABC$. Let $(w,I)$ be the inscribed circle of $ABC$, $(\Omega,O)$ be the circumscribed circle of $ABC$, and $A_0$ be the midpoint of altitude $AH$. $w$ touches $BC$ at point $D$. $A_0 D$ and $w$ intersect at point $P$, and the perpendicular from $I$ to $A_0 D$ intersects $BC$ at the point $M$. $MR$ and $MS$ lines touch $\Omega$ at $R$ and $S$ respectively. Prove that the points $R,P,D,S$ are concyclic.
(proposed by E. Enkzaya, inspired by Vietnamese olympiad problem)
