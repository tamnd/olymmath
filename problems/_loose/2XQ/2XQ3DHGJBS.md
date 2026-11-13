---
tag: 2XQ3DHGJBS
kind: problem
type: answer
answer: a) 3, 7, 9; b) 101
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=38
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 65th Romanian Mathematical Olympiad
---
An integer $n > 1$ will be called *p-periodic* if $\frac{1}{n}$ is a repeating decimal fraction, whose shortest period has length $p$ and begins immediately after the decimal point. For instance, $\frac{1}{9} = 0.111\dots$ is 1-periodic and $\frac{1}{11} = 0.090909\dots$ is 2-periodic.

a) Find all p-periodic numbers $n$ so that the first digit of the period of $\frac{1}{n}$ is not nil.

b) Find the largest 4-periodic prime.
