---
tag: 472HTAMQMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Carine and Cyril are playing the following game. First, Cyril chooses an integer $n \geqslant 1$. Then, in each cell of a $3 \times 3$ grid (similar to a tic-tac-toe board), he writes an integer.

Next, it's Carine's turn. She can, as many times as she wishes, perform the following operation: she chooses a cell $\mathbf{c}$, then increases by 1 the value of $\mathbf{c}$ and its neighbors (i.e., the cells that share a side with it). Carine wins the game if she manages to make all 9 integers equal modulo $n$.

Which player has a winning strategy?
