---
tag: X60XP6BPTE
kind: problem
type: answer
answer: innon-decreasingorderof
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Natural numbers from 100 to 999 are written on separate cards. The cards are placed on the table face up, shuffled, and then stacked into one pile. We will sort the cards by opening them sequentially from this pile, arranging them into piles face up according to the last digit of the written number. The first pile will contain all numbers ending in 0, the second pile will contain all numbers ending in 1, and so on. We will stack all the piles into one pile, placing the second pile on top of the first, then the third, and finally the tenth. We will then turn over the resulting stack of cards and sort them again, this time arranging the cards into piles according to the second digit. We will stack the resulting piles into one pile again, as indicated earlier (in ascending order of the second digit), and sort them one last time, arranging and stacking the piles according to the leading digits. In what order will the cards be in the stack after this sorting?
