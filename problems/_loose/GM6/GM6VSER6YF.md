---
tag: GM6VSER6YF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178891
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given triangle $ABC$. Let points $D, E \in (BC)$, $F, G \in (CA)$, and $H, I \in (AB)$ be such that $BD = CE$, $CF = AG$, and $AH = BI$. Let $M, N$, and $P$ be the midpoints of segments $[GH]$, $[DI]$, and $[EF]$, respectively, and let $M'$ be the intersection point of lines $AM$ and $BC$.

a) Prove that

$$
\frac{BM'}{CM'} = \frac{AG}{AH} \cdot \frac{AB}{AC}
$$

b) Prove that the lines $AM$, $BN$, and $CP$ are concurrent!
