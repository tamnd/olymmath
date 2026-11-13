---
tag: ZXADSX75AC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the Gauss integral

$$\oint\frac{(d\overrightarrow{A},d\overrightarrow{B},\overrightarrow{A}-\overrightarrow{B})}{|\overrightarrow{A}-\overrightarrow{B}|^3}$$

where $\overrightarrow{A}$ runs along the curve $x=\cos\alpha$, $y=\sin\alpha$, $z=0$, and $\overrightarrow{B}$ along the curve $x=2\cos^2\beta$, $y=\frac12\sin\beta$, $z=\sin2\beta$.

Note: that $\oint$ was supposed to be oiint (i.e. $\iint$ with a circle) but the command does not work on AoPS.
