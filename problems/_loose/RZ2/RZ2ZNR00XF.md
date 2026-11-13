---
tag: RZ2ZNR00XF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
James has a red jar, a blue jar and a pile of $100$ pebbles. Initially both jars are empty. A move consists of moving a pebble from the pile into one of the jars or returning a pebble from one of the jars to the pile. The numbers of pebbles in the red and blue jars determine the state of the game. The followwing conditions must be satisfied:

(a) The red jar may never contain fewer pebbles than the blue jar;

(b) The game may never be returned to a previous state.

What is the maximum number of moves that James can make?
