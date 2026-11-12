---
tag: 979CJ4XVTN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $N$ coins on the table. Sasha, Misha, and Vitalik take turns picking up coins from the table. Sasha can only take 1 coin per turn. Misha can take exactly 1, 3, 5, 7, or 9 coins per turn. Vitalik can take exactly 2, 4, 6, 8, or 10 coins per turn (if only 1 coin is left on the table, he skips his turn). The winner is the one who takes the last coin from the table. Who will win this game if Sasha determines the order in which the players take their turns (for example, Vitalik first, then Misha, and finally Sasha), given: a) $N=2023 ;$ b) $N=2022$.
