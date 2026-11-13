---
tag: AZW0VQFFQA
kind: problem
type: answer
answer: sqrt[3]{abc}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2013
    source: hf-mathnet
    label: Belarus BelarusMO 2013_s
---
Given positive real numbers $a$, $b$, $c$. Find the greatest real number $x$ such that there exist positive real numbers $p$, $q$, $r$ ($p + q + r = 1$) with $x \le \min\{ap/q, bq/r, cr/p\}$.
