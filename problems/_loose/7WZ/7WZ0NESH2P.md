---
tag: 7WZ0NESH2P
kind: problem
type: answer
answer: "51"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Jason and Jared take turns placing blocks within a game board with dimensions $3 \times 300$, with Jason going first, such that no two blocks can overlap. The player who cannot place a block within the boundaries loses. Jason can only place $2 \times 100$ blocks, and Jared can only place $2 \times n$ blocks where $n$ is some positive integer greater than 3. Find the smallest integer value of $n$ that still guarantees Jason a win (given both players are playing optimally).
