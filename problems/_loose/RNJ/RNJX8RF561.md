---
tag: RNJX8RF561
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261587
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ players are playing a game. Each player has $n$ tokens. Every turn, two players with at least one token are randomly selected. The player with less tokens gives one token to the player with more tokens. If both players have the same number of tokens, a coin flip decides which player receives a token and which player gives a token. The game ends when one player has all the tokens. If $n = 2019$, suppose the maximum number of turns the game could take to end can be written as $\frac{1}{d} (a \cdot 2019^3 + b \cdot 2019^2 + c \cdot 2019)$ for integers $a, b, c, d$. Find $\frac{abc}{d}$
.
