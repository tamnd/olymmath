---
tag: CPVNY27PWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138763
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two people play a game: in a fixed graph $G$, they alternately construct a path. If $v_{1} \ldots v_{n}$ is the path constructed so far, the next player must find a vertex $v_{n+1}$ such that $v_{1} \ldots v_{n+1}$ is still a path. The player who cannot further extend the path loses the game. For which graphs $G$ does the first player have a winning strategy; for which graphs does the second player win?
