---
tag: RQ1GWB69BQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are three types of parts $a$, $b$, and $c$. Take $2n+1 (n>2)$ parts and arrange them in a circle in the order $a b a b \cdots a b c$. Now perform the following operation: while ensuring that no two adjacent parts are of the same type, change the type of one part at a time. Question: Is it possible to achieve the final order of parts as $a b a b \cdots a c b$ after a finite number of operations?
