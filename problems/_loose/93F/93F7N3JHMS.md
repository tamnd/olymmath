---
tag: 93F7N3JHMS
kind: problem
type: answer
answer: "36"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Seven dwarfs each have some gold coins, the tallest dwarf has 99 gold coins, the shortest dwarf has 81 gold coins, and the number of gold coins these two have is neither the most nor the least. If the seven dwarfs have different numbers of gold coins, and the average is 86, then the dwarf with the least gold coins can have at most how many gold coins.

The total number of gold coins is 86 * 7 = 602. The sum of the gold coins of the tallest and shortest dwarfs is 99 + 81 = 180. Therefore, the sum of the gold coins of the other five dwarfs is 602 - 180 = 422. Since the number of gold coins of the tallest and shortest dwarfs is neither the most nor the least, the maximum number of gold coins the dwarf with the least gold coins can have is 422 - (98 + 97 + 96 + 95) = 422 - 386 = 36.

Therefore, the dwarf with the least gold coins can have at most 36 gold coins.
