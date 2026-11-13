---
tag: 4XYKDBDEV7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place a finite number of beans in a row of squares, assuming that this row of squares is infinitely long in both directions. A sequence of moves proceeds according to the following rules: at each step, first select a square that contains at least two beans, remove two beans from it, place one bean in the left neighboring square, and place the other bean in the right neighboring square. The sequence of moves terminates when each square contains at most 1 bean. Prove that for any given initial state, any sequence of moves that satisfies the rules will end after the same number of steps and will have the same final state.
