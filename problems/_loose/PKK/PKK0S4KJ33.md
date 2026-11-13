---
tag: PKK0S4KJ33
kind: problem
type: answer
answer: 2^{k}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A carried path (one square wide) is infinite in both directions. Two squares on the path are traps. There are $N$ squares between the traps, and one of them is where the hopper stands. Before each hop, we choose a random natural number $X$, after which the hopper jumps $X$ squares to the left or right (at its own choice). During the game, we can see where the hopper is. For which $N$ can we choose the numbers so that we can definitely trap the hopper, no matter where it initially stood and regardless of how it chooses the directions for jumping?
