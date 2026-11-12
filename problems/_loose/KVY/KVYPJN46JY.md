---
tag: KVYPJN46JY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A group of eight tennis players once a year played for a cup according to the Olympic system (players are divided into pairs by lot; the winners are divided by lot into two pairs playing in the semifinals; their winners play the final match). After several years, it turned out that everyone had played exactly once with everyone else. Prove that

a) [2] everyone has been in the semifinals more than once;

b) [3] everyone has been in the final.

(Boris Frenkin)

According to the condition, each player played 7 matches, and in total, there were $8 \cdot 7: 2=28$ matches. Since 7 matches are played each year, the cup was contested 4 times.

a) A player who played in the semifinals no more than once, over 4 years, played no more than $3+3 \cdot 1=6$ matches, which contradicts the condition.

b) In total, there were $2 \cdot 4=8$ places in the four finals. If someone did not play in the final, then someone else must have played in the final at least twice. But then he played no fewer than $2 \cdot 3+2 \cdot 1=8$ matches, which contradicts the condition.

3 [5]. In a pile of $n$ stones, two players play. On a move, one can take from the pile a number of stones equal to a prime divisor of the current number of stones in the pile, or equal to 1. The player who takes the last stone wins. For which $n$ can the starting player always win, no matter how the opponent plays?

(Fedor Ivlev)
