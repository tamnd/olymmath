---
tag: VCKV8DSZYF
kind: problem
type: answer
answer: \frac{(-2r)^{2}}{3^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The plane is divided into square cells with side $a$ by straight lines. The cells are numbered using pairs of integers $(m, n)$ (thus, the cell to the right will have the number $(m+1, n)$, and the cell above will have the number $(m, n+1)$). Find the probability that a coin of radius $r<a / 2$ thrown randomly on the plane will completely fall into a cell for which $m+n$ is divisible by three.
