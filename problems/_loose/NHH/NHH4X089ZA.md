---
tag: NHH4X089ZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248895
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 23rd ASU
---
$ABCD$ is a convex quadrilateral. $X$ lies on the segment $AB$ with $\frac{AX}{XB} = \frac{m}{n}$. $Y$ lies on the segment $CD$ with $\frac{CY}{YD} = \frac{m}{n}$. $AY$ and $DX$ intersect at $P$, and $BY$ and $CX$ intersect at $Q$. Show that $\frac{S_{XQYP}}{S_{ABCD}} < \frac{mn}{m^2 + mn + n^2}$.
