---
tag: 1PZAHEHBKS
kind: problem
type: answer
answer: a) Yes, it can be played with five players. b) Yes, it can also be played with four players.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Thailand/train/0000.parquet#row=2
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 2$ be an integer. Killer is a game played by a dealer and $n$ players. The game begins with the dealer designating one of the $n$ players a killer and keeping this information a secret. Every player knows that the killer exists among the $n$ players. The dealer can make as many public announcements as he wishes. Then, he secretly gives each of the $n$ players a (possibly different) name of one of the $n$ players. This game has the property that:
(i) Alone, each player (killer included) does not know who the killer is. Each player also cannot tell with certainty who is not the killer.
(ii) If any two of the $n$ players exchange information, they can determine the killer.
For example, if there are a dealer and 2 players, the dealer can announce that he will give the same name to both players if the first player is the killer, and give different names to the players if the second player is the killer.

a. Prove that Killer can be played with a dealer and 5 players.

b. Determine whether Killer can be played with a dealer and 4 players.
