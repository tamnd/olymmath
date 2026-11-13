---
tag: 8QECBY1TY4
kind: problem
type: answer
answer: d is not prime; the least possible value of d is 8.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=76
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2008
    source: hf-mathnet
    label: India Indija TS 2008
---
Suppose $d$, $u$, $v$, $w$ are positive integers such that $u$, $v$, $w$ are distinct and
$$
d^3 - d(uv + vw + wu) - 2uvw = 0.
$$
Prove that $d$ cannot be a prime. Find also the least possible value of $d$.
