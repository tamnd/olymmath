---
tag: 7PZ8M7EHQ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h3362408
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40763
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2022
    source: hf-ai-mo-aops
    label: 2022 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Let $S$ be the set of all integers of the form $x^2+3xy+8y^2.$ where $x$ and $y$ are integers.
(a) Show that if $u$ and $v$ are in $S,$ then so is $uv.$ (b) Can an integer of the form $23k + 7,$ with $k$ an integer, belong to $S$ ?
