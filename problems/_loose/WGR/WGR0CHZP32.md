---
tag: WGR0CHZP32
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231812
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ a positive integer.

In a spaceship there are $2 \cdot N$ people, and each two of them are friends or foes (both relationships are symmetric). Two aliens play a game as follows:

1) The first alien chooses any person as she wishes.

2) Thenceforth, alternately, each alien chooses one person not chosen before such that the person chosen on each turn be a friend of the person chosen on the previous turn.

3) The alien that can't play in her turn loses.

Prove that second player has a winning strategy *if, and only if*, the $2 \cdot N$ people can be divided in $N$ pairs in such a way that two people in the same pair are friends.
