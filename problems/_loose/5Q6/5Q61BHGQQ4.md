---
tag: 5Q61BHGQQ4
kind: problem
type: answer
answer: Andriy wins if n is a power of two; otherwise Olesya wins.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=51
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine UkraineMO
---
Numbers $1, 2, \ldots, n$ are written in line. Numbers $1$ and $n$ are painted blue, and the rest are painted yellow. Two players - Olesya and Andriy - in turns repaint one of the yellow numbers blue by the following rules: with the first move Olesya (she starts) repaints blue any of the yellow numbers (let us denote it by $k$). Then Andriy chooses from the intervals of numbers $(1, 2, \ldots, k)$ or $(k, k+1, \ldots, n)$ the one that contains more yellow numbers. If these intervals have equal amount of yellow numbers, then he selects any of the two. If, e.g., the interval $(1, 2, \ldots, k)$ is larger, then another interval is not involved in the game anymore. After that Andriy repaints any yellow number from the new interval blue. Now a new interval is also divided into two smaller ones. Then Olesya chooses one of the two new intervals, the one that contains more yellow numbers for her move, and another interval goes out of the game. And so on. The winner is the one who paints blue a number, both (left and right) neighbours of which are blue. Who wins this game, if both players play perfectly?

(Bogdan Rublyov)
