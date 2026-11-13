---
tag: B1YEACWA0V
kind: problem
type: answer
answer: (1, 2, 3, 4, 5, 6, ...) and (3, 2, 1, 4, 5, 6, ...)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 51st Mongolian National Mathematical Olympiad
---
Determine all sequences of positive integers $\{a_n\}_{n=1}^{\infty}$ satisfying the following conditions for any positive integer $k$:
(i) $a_{2^{k+1}} = 2 \cdot a_{2^k}$,
(ii) The set $\{a_1, a_2, \dots, a_k\}$ is a complete set of residue classes modulo $k$.
