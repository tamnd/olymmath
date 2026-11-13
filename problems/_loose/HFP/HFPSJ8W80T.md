---
tag: HFPSJ8W80T
kind: problem
type: answer
answer: D
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163218
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2012
    source: hf-mathnet
    label: Slovenia National Math Olympiad 2012
---
Which points lie on the graph of the linear function $y=b x+1$, where $b$ is some non-zero real number?
(A) $(0,1)$ and $\left(\frac{1}{b}, 0\right)$
(B) $(0, b)$ and $\left(-\frac{1}{b}, 0\right)$
(C) $(0,1)$ and $(b, 0)$
(D) $(0,1)$ and $\left(-\frac{1}{b}, 0\right)$
(E) $\left(0,-\frac{1}{b}\right)$ and $(1,0)$
