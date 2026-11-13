---
tag: T9S8CEP5N4
kind: problem
type: answer
answer: \frac{(N-1)(3N-1)}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be an odd number, $N\geq 3$. $N$ tennis players take part in a championship. Before starting the championship, a commission puts the players in a row depending on how good they think the players are. During the championship, every player plays with every other player exactly once, and each match has a winner. A match is called *suprising* if the winner was rated lower by the commission. At the end of the tournament, players are arranged in a line based on the number of victories they have achieved. In the event of a tie, the commission's initial order is used to decide which player will be higher.

It turns out that the final order is exactly the same as the commission's initial order. What is the maximal number of suprising matches that could have happened.
