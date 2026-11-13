---
tag: YMNV4TSGDA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ silver coins: labeled as $1,2, \cdots, n$. One of these coins might be fake, and the fake one has a different weight from the genuine ones, either lighter or heavier, while the genuine coins all weigh the same. Additionally, a standard silver coin is provided, labeled as 0. The task is to find the fake coin using a balance scale and determine whether it is lighter or heavier. The goal is to minimize the number of times the balance scale is used. Here, the number of times the balance scale is used refers to the number of times it is used in the worst-case scenario, or the average number of times it is used.
