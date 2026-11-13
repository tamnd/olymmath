---
tag: ZDAXNC7688
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154480
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Philippines Mathematical Olympiad
---
In $\triangle A B C, A B=A C$. A line parallel to $B C$ meets sides $A B$ and $A C$ at $D$ and $E$, respectively. The angle bisector of $\angle B A C$ meets the circumcircles of $\triangle A B C$ and $\triangle A D E$ at points $X$ and $Y$, respectively. Let $F$ and $G$ be the midpoints of $B Y$ and $X Y$, respectively. Let $T$ be the intersection of lines $C Y$ and $D F$. Prove that the circumcenter of $\triangle F G T$ lies on line $X Y$.
