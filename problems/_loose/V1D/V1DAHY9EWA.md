---
tag: V1DAHY9EWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anatole and Théo are playing the following game: Anatole chooses a prime number $p>2$ and Théo writes a positive integer $a$ on the board. Initially, $S=0$. Taking turns, starting with Anatole, they erase the number they wrote in the previous turn (except for Anatole on the first turn), and write a new integer strictly greater than the one written on the board. Then, the player whose turn it is calculates $a^{b}+b^{a}$: the result is denoted as $s_{l}$ where $l$ is the turn number. If $p$ divides $s_{l}\left(s_{1}+2 s_{2}+\cdots+l s_{l}\right)$, the player whose turn it is wins; otherwise, it is the next player's turn.

Determine which of the two players has a winning strategy.
