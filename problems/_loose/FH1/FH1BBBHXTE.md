---
tag: FH1BBBHXTE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Mr. Whitlock is playing a game with his math class to teach them about money. Mr. Whitlock's math class consists of $n \geq 2$ students, whom he has numbered from 1 to $n$. Mr. Whitlock gives $m_{i} \geq 0$ dollars to student $i$, for each $1 \leq i \leq n$, where each $m_{i}$ is an integer and $m_{1}+m_{2}+\cdots+m_{n} \geq 1$.
We say a student is a giver if no other student has more money than they do and we say a student is a receiver if no other student has less money than they do. To play the game, each student who is a giver, gives one dollar to each student who is a receiver (it is possible for a student to have a negative amount of money after doing so). This process is repeated until either all students have the same amount of money, or the students reach a distribution of money that they had previously reached.
(a) Give values of $n, m_{1}, m_{2}, \ldots, m_{n}$ for which the game ends with at least one student having a negative amount of money, and show that the game does indeed end this way.
(b) Suppose there are $n$ students. Determine the smallest possible value $k_{n}$ such that if $m_{1}+m_{2}+\cdots+m_{n} \geq k_{n}$ then no player will ever have a negative amount of money.
(c) Suppose $n=5$. Determine all quintuples ( $m_{1}, m_{2}, m_{3}, m_{4}, m_{5}$ ), with $m_{1} \leq$ $m_{2} \leq m_{3} \leq m_{4} \leq m_{5}$, for which the game ends with all students having the same amount of money.
