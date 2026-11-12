---
tag: 38HAQHPWKN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25946
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the game "Landing", two armies are capturing a country. They take turns, occupying one of the free cities with each move. The first city an army captures is taken from the air, and with each subsequent move, it can capture any city connected by a road to any city already occupied by that army. If there are no such cities, the army ceases military operations (while the other army may continue its operations).

Will there be such a scheme of cities and roads that the army moving second can capture more than half of all cities, no matter how the first army acts? (The number of cities is finite, each road connects exactly two cities.)
