---
tag: K6TRMZ27BX
kind: problem
type: answer
answer: p_{99}=\frac{2}{3}-\frac{1}{3\cdot2^{99}},p_{100}=\frac{1}{3}+\frac{1}{3\cdot2^{99}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Someone is playing a game of jumping chess by tossing a coin, knowing that the coin landing on either side is an equally probable event. The chessboard is marked with station 0, station 1, station 2, ..., station 100. A chess piece starts at station 0. Each time the player tosses the coin, the chess piece moves forward once. If heads are tossed, the chess piece moves forward one station (from $k$ to $k+1$), and if tails are tossed, the chess piece moves forward two stations (from $k$ to $k+2$). The game ends when the chess piece reaches station 99 (Victory Camp) or station 100 (Failure Camp). Let the probability of the chess piece landing on station $n$ be $p_{n}$.
(1) Find the values of $p_{0}, p_{1}, p_{2}$;
(2) Prove that $p_{n}-p_{n-1}=-\frac{1}{2}\left(p_{n-1}-p_{n-2}\right)$, where $n \in \mathbf{N}^{*}, 2 \leqslant n \leqslant 99$;
(3) Find the values of $p_{99}, p_{100}$.
