---
tag: BPX5WCK5D9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218697
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a non-isosceles acute triangle $ABC$, $D$ is the midpoint of the edge $[BC]$. The points $E$ and $F$ lie on $[AC]$ and $[AB]$, respectively, and the circumcircles of $CDE$ and $AEF$ intersect in $P$ on $[AD]$. The angle bisector from $P$ in triangle $EFP$ intersects $EF$ in $Q$. Prove that the tangent line to the circumcirle of $AQP$ at $A$ is perpendicular to $BC$.
