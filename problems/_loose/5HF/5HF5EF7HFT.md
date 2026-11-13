---
tag: 5HF5EF7HFT
kind: problem
type: answer
answer: n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=48
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Due to the increasing pandemic situation, the government decides to enforce traffic ban by building $n$ straight lines (infinite at both directions) as "walls", with no two of them are parallel, and no three of them are concurrent. The set of these walls is denoted as $W_n$. For each wall in $W_n$, the government paints one of its sides in blue, and the other side in green. By such, for any two walls, their intersection is divided into four corners: a mono-color corner such that both walls are blue, a mono-color corner such that both walls are green, and two duel-color corners such that the walls are in different colors. To make sure there are paths for emergency, the government opens a door on each intersection of walls so that people can travel from a duel-color corner to the other duel-color corner. These doors are the only ways for people to cross a wall.
Given $W_n$, let $k(W_n)$ be the largest positive integer $k$ such that, no matter how the government paints the walls, we can place $k$ people on the plane so that no two of them can ever meet each other. For each $n$, find all possible values of $k(W_n)$.
