---
tag: 5G0XVP0AEP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h3164404
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Dexter and Raquel are playing a game with $N$ stones. Dexter goes first and takes one stone from the pile. After that, the players alternate turns and can take anywhere from $1$ to $x + 1$ stones from the pile, where $x$ is the number of stones the other player took on the turn immediately prior. The winner is the one to take the last stone from the pile. Assuming Dexter and Raquel play optimally, compute the number of positive integers $N \le 2021$ where Dexter wins this game.
