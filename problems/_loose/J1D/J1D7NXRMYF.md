---
tag: J1D7NXRMYF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77066
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=23
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 62nd Czech and Slovak Mathematical Olympiad
---
Each of $n$ Robin Hoods $(n \geqslant 3)$ robbed some coins. Together they have earned 100n coins. They have decided to cut the loot in a following way: in one step one Robin can take his two coins and give to some other two Hoods, one coin each. Find all positive integers $n \geqslant 3$ for which they can split the loot in equal parts (100 coins each).

(Ján Mazák)
