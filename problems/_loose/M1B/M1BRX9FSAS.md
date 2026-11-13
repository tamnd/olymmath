---
tag: M1BRX9FSAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h1259109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12398
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2015
    source: hf-ai-mo-aops
    label: 2015 Canadian Mathematical Olympiad Qualification
---
A magical castle has $n$ identical rooms, each of which contains $k$ doors arranged in a line. In room $i, 1 \leq i \leq n - 1$ there is one door that will take you to room $i + 1$ , and in room $n$ there is one door that takes you out of the castle. All other doors take you back to room $1$ . When you go through a door and enter a room, you are unable to tell what room you are entering and you are unable to see which doors you have gone through before. You begin by standing in room $1$ and know the values of $n$ and $k$ . Determine for which values of $n$ and $k$ there exists a strategy that is guaranteed to get you out of the castle and explain the strategy. For such values of $n$ and $k$ , exhibit such a strategy and prove that it will work.
