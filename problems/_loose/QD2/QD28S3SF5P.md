---
tag: QD28S3SF5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254340
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo
    source: hf-mathnet
    label: Turkey 31st Turkish Mathematical Olympiad
---
On a triangle $ABC$, points $D$, $E$, $F$ are given on the segments $BC$, $AC$, $AB$ respectively such that $DE \parallel AB$, $DF \parallel AC$ and $\frac{BD}{DC}=\frac{AB^2}{AC^2}$ holds. Let the circumcircle of $AEF$ meet $AD$ at $R$ and the line that is tangent to the circumcircle of $ABC$ at $A$ at $S$ again. Let the line $EF$ intersect $BC$ at $L$ and $SR$ at $T$. Prove that $SR$ bisects $AB$ if and only if $BS$ bisects $TL$.
