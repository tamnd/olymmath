---
tag: E0ENK00JW1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
$n \ge 3$ people seated at a round table play a game as follows. Initially each player is dealt a green or orange card. Game play then takes place in a series of rounds. In each round,
(i) Each player notes the colours of the cards held by the two players to his/her immediate right. If these are different, the player raises his/her hand.
(ii) Each player with a raised hand replaces his/her card with one of the opposite colour.
The game ends when each player holds the same colour as he/she did initially. A value of $n$ is called *playable* if game play *must* end after a finite number of rounds, regardless of the initial cards dealt to the players.
(a) Prove that there are infinitely many values of $n$ which are *playable*.
(b) Prove that there are infinitely many values of $n$ which are *not* *playable*.
