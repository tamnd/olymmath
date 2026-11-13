---
tag: 4T96ZJXZA7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10867
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187272
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1990
    source: hf-numina-olympiads
    label: IberoAmerican_MO
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
The circle $\mathrm{C}$ has diameter $\mathrm{AB}$. The tangent at $\mathrm{B}$ is $\mathrm{T}$. For each point $\mathrm{M}$ (not equal to $\mathrm{A}$ ) on $\mathrm{C}$ there is a circle $\mathrm{C}^{\prime}$ which touches $\mathrm{T}$ and touches $\mathrm{C}$ at M. Find the point at which $\mathrm{C}^{\prime}$ touches $\mathrm{T}$ and find the locus of the center of $\mathrm{C}^{\prime}$ as $\mathrm{M}$ varies. Show that there is a circle orthogonal to all the circles $\mathrm{C}^{\prime}$.
