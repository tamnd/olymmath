---
tag: C1DZY0TG36
kind: problem
type: answer
answer: p ≥ 73
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2018
    source: hf-mathnet
    label: Argentina Argentina_2018
---
There were three candidates $A$, $B$, $C$ in the elections for a provincial governor. In the first round $A$ won $44\%$ of the number of votes given for $B$ and $C$ together and $C$ had fewest votes. No candidate had the majority necessary for a first-round win, so there was a second round for $A$ and $B$. The voters in the second round were the same as in the first round, except $p\%$ of the voters for $C$ who chose not to participate in the second round; $p$ is an integer, $1 \le p \le 100$. In addition the ones who voted for $B$ in the first round did so again in the second round.

A journalist claims that, knowing all the above, one can infer who the winner is with certainty. For what values of $p$ is he right?

Note. The winner in the second round is the one who obtains more than half of the total number of votes in the second round.
