---
tag: YYMK730GTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179747
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2019
    source: hf-mathnet
    label: Romania 2019 ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $H$ be the orthocenter of the acute-angled triangle $ABC$. In the plane of triangle $ABC$, consider a point $X$ such that triangle $XAH$ is a right isosceles triangle with hypotenuse $AH$, and $B$ and $X$ are on opposite sides of the line $AH$. Prove that $\overrightarrow{X A}+\overrightarrow{X C}+\overrightarrow{X H}=\overrightarrow{X B}$ if and only if $\measuredangle B A C=45^{\circ}$.
