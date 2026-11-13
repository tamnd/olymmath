---
tag: 98AFJY6KVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h366011
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4552
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2010
    source: hf-ai-mo-aops
    label: 2010 All-Russian Olympiad
---
Each of $1000$ elves has a hat, red on the inside and blue on the outside or vise versa. An elf with a hat that is red outside can only lie, and an elf with a hat that is blue outside can only tell the truth. One day every elf tells every other elf, "Your hat is red on the outside." During that day, some of the elves turn their hats inside out at any time during the day. (An elf can do that more than once per day.) Find the smallest possible number of times any hat is turned inside out.
