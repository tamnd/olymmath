---
tag: DCVECQ8ZPA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022984
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29012
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2013 Tournament of Towns
---
Each of $100$ stones has a sticker showing its true weight. No two stones weight the same. Mischievous Greg wants to rearrange stickers so that the sum of the numbers on the stickers for any group containing from $1$ to $99$ stones is different from the true weight of this group. Is it always possible?
