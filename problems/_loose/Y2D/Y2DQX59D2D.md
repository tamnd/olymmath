---
tag: Y2DQX59D2D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three cats--TheInnocentKitten, TheNeutralKitten, and TheGuiltyKitten labelled $P_1, P_2,$ and $P_3$ respectively with $P_{n+3} = P_{n}$--are playing a game with three rounds as follows:

- Each round has three turns. For round $r \in \{1,2,3\}$ and turn $t \in \{1,2,3\}$ in that round, player $P_{t+1-r}$ picks a non-negative integer. The turns in each round occur in increasing order of $t$, and the rounds occur in increasing order of $r$.
$\newline
\newline$

- **Motivations:** Every player focuses primarily on maximizing the sum of their own choices and secondarily on minimizing the total of the other players' sums. TheNeutralKitten and TheGuiltyKitten have the additional tertiary priority of minimizing TheInnocentKitten's sum.
$\newline
\newline$

- For round $2$, player $P_{2}$ has no choice but to pick the number equal to what player $P_{1}$ chose in round $1$. Likewise, for round $3$, player $P_{3}$ must pick the number equal to what player $P_{2}$ chose in round $2$.
$\newline
\newline$

- If not all three players choose their numbers such that the values they chose in rounds 1,2,3 form an arithmetic progression in that order by the end of the game, all players' sums are set to $-1$ regardless of what they have chosen.
$\newline
\newline$

- If the sum of the choices in any given round is greater than $100$, all choices that round are set to $0$ at the end of that round. That is, rules $2$, $3$, and $4$ act as if each player chose $0$ that round.
$\newline
\newline$

- All players play optimally as per their motivations. Furthermore, all players know that all other players will play optimally (and so on.)

Let $A$ and $B$ be TheInnocentKitten's sum and TheGuiltyKitten's sum respectively. Compute $1000A + B$ when all players play optimally.

Proposed by Harry Chen (Extile)
