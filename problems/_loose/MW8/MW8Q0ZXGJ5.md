---
tag: MW8Q0ZXGJ5
kind: problem
type: answer
answer: "2521"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $41 \times 41$ battlefield is divided into 1681 unit squares. A tank is hidden in one of these unit squares. A bomber aircraft bombs the battlefield. Each bombing targets one unit square. If the tank's square is not bombed, the tank remains in place; if it is bombed, the tank must move to an adjacent unit square (two squares are considered "adjacent" if they share a common edge). Destroying the tank requires hitting it twice. Throughout the process, the bomber pilot has no knowledge of the tank's location or whether it has been hit. Determine the minimum number of bombings required to ensure the tank is destroyed.
