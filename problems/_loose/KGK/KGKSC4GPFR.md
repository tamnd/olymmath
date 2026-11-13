---
tag: KGKSC4GPFR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try to give the following equations a combinatorial meaning
(1) $\binom{n-m}{n-k}=\sum_{l=0}^{m}(-1)^{l}\binom{m}{l}\binom{n-l}{k}, n \geqslant k \geqslant m$
(2) $\binom{l-1}{n-m-1}=\sum_{j=0}^{n-m}(-1)^{j}\binom{n-m}{j}\binom{n-m-j+l-1}{l}$
(3) $\binom{m+l-1}{m-1}=\binom{m+l}{m}-\binom{m+l}{m+1}+\binom{m+l}{m+2}-\cdots+(-1)^{l}\binom{m+l}{m+l}$
