---
tag: 8JAHZKXM0R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Let $p$ be a prime. At any vertex of a regular polygon with $p$ sides it is written an integer. For any vertex of the polygon we compute the difference between the sum of the integers written at his neighbors and his number. After that we delete all the initial integers and replace them by the new obtained integers. Prove that the integers obtained after $p$ such steps are the same modulo $p$ with the initial integers.
