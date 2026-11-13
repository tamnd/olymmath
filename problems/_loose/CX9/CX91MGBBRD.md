---
tag: CX91MGBBRD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2068537
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28016
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1987 Tournament Of Towns
---
In a game two players alternately choose larger natural numbers. At each turn the difference between the new and the old number must be greater than zero but smaller than the old number. The original number is 2. The winner is considered to be the player who chooses the number $1987$ . In a perfect game, which player wins?
