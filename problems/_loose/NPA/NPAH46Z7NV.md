---
tag: NPAH46Z7NV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Flanders Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2983971
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31691
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: be-vwo/2013
    source: hf-ai-mo-aops
    label: 2013 Flanders Math Olympiad
---
$2013$ smurfs are sitting at a large round table. Each of them has two tickets. on each card represents a number from $\{1, 2, . . ., 2013\}$ such that each of the numbers from this set occurs exactly twice. Every smurf takes the card every minute with the smaller of the two numbers, it smurfs on to its left neighbor and receives a card from his right neighbor. Show that there will come a time when a smurf has two cards with the same number.
