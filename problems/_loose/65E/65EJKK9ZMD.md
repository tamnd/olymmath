---
tag: 65EJKK9ZMD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a stack of 1001 tokens. We use the following rule: on the first move, we choose a token, eliminate it from the game, and split the stack into two arbitrary stacks. Then, on each move, we choose a token to eliminate, and split one stack (not necessarily the one from which we extracted the token) into two arbitrary stacks. Can we manage to have only stacks of three tokens at some point? (Note: if a stack contains only one token and we remove that token, we consider that we now have a stack of zero tokens, and not that the stack has disappeared).
