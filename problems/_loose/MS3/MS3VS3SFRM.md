---
tag: MS3VS3SFRM
kind: problem
type: answer
answer: x=1, y=2, z=3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=311
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive reals $x, y, z$ so that
$$
\begin{cases}
xyz = 6 \\
(x+1)(y+2)(z+3) = 48.
\end{cases}
$$
