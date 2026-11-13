---
tag: VSE8VFMJPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516638
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10060
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $n$ be a positive integer. E. Chen and E. Chen play a game on the $n^2$ points of an $n \times n$ lattice grid. They alternately mark points on the grid such that no player marks a point that is on or inside a non-degenerate triangle formed by three marked points. Each point can be marked only once. The game ends when no player can make a move, and the last player to make a move wins. Determine the number of values of $n$ between $1$ and $2013$ (inclusive) for which the first player can guarantee a win, regardless of the moves that the second player makes.

*Ray Li*
