---
tag: AWBA6GPCRA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h3286002
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Costa Rica - Final Round
---
Shikaku and his son Shikamaru must climb a staircase that has $2022$ steps; the steps are listed $1$ , $2$ , $...$ , $2022$ and the floor is considered step $0$ . This bores them both a lot, so so they decide to organize a game. They begin by tying a rope between them, so that At most they can be separated from each other by a distance of $7$ steps, that is, if they are in the steps $m$ and $ n$ , then it must always be true that $|m-n| \le 7$ . For the game they establish the following rules:
a) They move alternately in turns.
b) In his corresponding turn, the player must move to a higher step than in the one that (the same) was previously.
c) If a player has just moved to the $n$ -th step, then on the next turn the other player cannot be moved to any of the steps $n-1$ , $n$ or $n + 1$ , except when it is for reach the last step.
d) Whoever reaches the last step (listed with $2022$ ) wins.
Shikamaru is bored to start, so his father starts. Determine which of the two players has a winning strategy and describe it.
