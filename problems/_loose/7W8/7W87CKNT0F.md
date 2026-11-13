---
tag: 7W87CKNT0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261704
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define
$$f(h,t) =
\begin{cases}
8h & h = t \\
(h-t)^2 & h \neq t.
\end{cases}$$
Cody plays a game with a fair coin, where he begins by flipping it once. At each turn in the game, if he has flipped $h$ heads and $t$ tails and $h + t < 6$, he can choose either to stop and receive $f(h,t)$ dollars or he can flip the coin again; if $h + t = 6$ then the game ends and he receives $f(h,t)$ dollars. If Cody plays to maximize expectancy, how much money, in dollars, can he expect to win from this game?
