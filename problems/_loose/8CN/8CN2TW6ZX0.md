---
tag: 8CN2TW6ZX0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A group of 4050 friends is playing a video game tournament. There are 2025 computers labelled $a_1, \dots, a_{2025}$ in one room and 2025 computers labelled $b_1, \dots, b_{2025}$ in another room at the tournament. The player on computer $a_i$ always plays against the players $b_i, b_{i+2}, b_{i+3}$ and $b_{i+4}$ (in particular, not against $b_{i+1}$), where the numbers of the computers are considered modulo 2025. After the first round, all players choose a computer within their room for the second round. Afterwards, they note that everyone has the same opponents in the second round as in the first round.
Prove that if someone chose the same computer in both rounds, then everyone chose the same computer in both rounds.
