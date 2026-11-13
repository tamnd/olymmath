---
tag: WMD8FM8R79
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3275708
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49569
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2023
    source: hf-ai-mo-aops
    label: 2023 Abelkonkurransen Finale
---
Arne and Berit are playing a game. They have chosen positive integers $m$ and $n$ with $n\geq 4$ and $m \leq 2n + 1$ . Arne begins by choosing a number from the set $\{1, 2, \dots , n \}$ , and writes it on a blackboard. Then Berit picks another number from the same set, and writes it on the board. They continue alternating turns, always choosing numbers that are not already on the blackboard. When the sum of all the numbers on the board exceeds or equals $m$ , the game is over, and whoever wrote the last number has won. For which combinations of $m$ and $n$ does Arne have a winning strategy?
