---
tag: V6KMKK47MP
kind: problem
type: answer
answer: '1: B; 2: A; 3: B'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=14
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $N_0$ is written on the board. Two persons, $A$ and $B$, play the following game: $A$ erases $N_0$ and writes a number $N_1 \in \{N_0 - 1; [N_0/3]\}$. Then $B$ erases $N_1$ and writes a number $N_2 \in \{N_1 - 1; [N_1/3]\}$. At his turn, $A$ erases $N_2$ and so on. They continue to play until on the board appears the number $0$; the player who writes first the number $0$ is considered as the winner and the other player is considered lost.

Determine whether the player $A$ or the player $B$ has a strategy to guarantee his win when:
$$
1/\ N_0 = 120 ?
$$
$$
2/\ N_0 = (3^{2002} - 1)/2 ?
$$
$$
3/\ N_0 = (3^{2002} + 1)/2 ?
$$
