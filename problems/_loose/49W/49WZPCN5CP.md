---
tag: 49WZPCN5CP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247075
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
Let $H{}$ be the orthocenter of the triangle $ABC{}$ and $X{}$ be the midpoint of the side $BC.$ The perpendicular at $H{}$ to $HX{}$ intersects the sides $(AB)$ and $(AC)$ at $Y{}$ and $Z{}$ respectively. Let $O{}$ be the circumcenter of $ABC{}$ and $O'$ be the circumcenter of $BHC.$

- Prove that $HY=HZ.$

- Prove that $\overrightarrow{AY}+\overrightarrow{AZ}=2\overrightarrow{OO'}.$
