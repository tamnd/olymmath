---
tag: FCRHD3GVFX
kind: problem
type: answer
answer: a) No positive integer l. b) Every positive integer l.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 60th Ukrainian National Mathematical Olympiad
---
a) For which positive integer $l$ there exists a pair of positive integers $(m, n)$, which consist of no more than $l$ digits, have different last digits and which satisfy the condition: the last $l$ digits of $m^2$ form the number $n$, and analogously, the last $l$ digits of $n^2$ form number $m$ (discarding any zeros that the last $l$ digits may begin with).

b) For which positive integer $l$ there exists a pair of positive integers $(m, n)$, which consist of no more than $l$ digits, have different last digits and which satisfy the condition: the last $l$ digits of $m^3$ form the number $n$, and analogously, the last $l$ digits of $n^3$ form number $m$ (discarding any zeros that the last $l$ digits may begin with).
