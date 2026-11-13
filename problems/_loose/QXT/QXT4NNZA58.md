---
tag: QXT4NNZA58
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233709
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Eddy and Moor play a game with the following rules:

- The game begins with a pile of $N$ stones, where $N$ is a positive integer. [/*]

- The $2$ players alternate taking turns (e.g. Eddy moves, then Moor moves, then Eddy moves, and so on). [/*]

- During a player's turn, given $a$ stones remaining in the pile, the player may remove $b$ stones from the pile, where $\gcd(a,b)=1$ and $b\leq a$. [/*]

- If a player cannot make a move, they lose. [/*]

For example, if Eddy goes first and $N=4$, then Eddy can remove $3$ stones from the pile (since $3\leq4$ and $\gcd(3,4)=1$), leaving $1$ stone in the pile. Moor can then remove $1$ stone from the pile (since $1\leq1$ and $\gcd(1,1)=1$), leaving $0$ stones in the pile. Since Eddy cannot remove stones from an empty pile, he cannot make a move, and therefore loses.

Both Eddy and Moor want to win, so they will both always make the best possible move. If Eddy moves first, for how many values of $N<2016$ can Eddy win no matter what moves Moor chooses?
