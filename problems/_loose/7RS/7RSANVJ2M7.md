---
tag: 7RSANVJ2M7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number. Troy and Abed are playing a game. Troy writes a positive integer $X$ on the board, and gives a sequence $(a_n)_{n\in\mathbb{N}}$ of positive integers to Abed. Abed now makes a sequence of moves. The $n$-th move is the following:
$$\text{ Replace } Y \text{ currently written on the board with either } Y + a_n \text{ or } Y \cdot a_n.$$
Abed wins if at some point the number on the board is a multiple of $p$. Determine whether Abed can win, regardless of Troy's choices, if
$a) p = 10^9 + 7$;
$b) p = 10^9 + 9$.
*Remark*: Both $10^9 + 7$ and $10^9 + 9$ are prime.

*Proposed by Ivan Novak*
