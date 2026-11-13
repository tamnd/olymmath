---
tag: HY4AZPKWGM
kind: problem
type: answer
answer: k \leq 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be positive integers such that $k\leq 2^n$. Banana and Corona are playing the following variant of the guessing game. First, Banana secretly picks an integer $x$ such that $1\leq x\leq n$. Corona will attempt to determine $x$ by asking some questions, which are described as follows. In each turn, Corona chooses $k$ distinct subsets of $\{1, 2, \ldots, n\}$ and, for each chosen set $S$, asks the question "Is $x$ in the set $S$?''.

Banana picks one of these $k$ questions and tells both the question and its answer to Corona, who can then start another turn.

Find all pairs $(n,k)$ such that, regardless of Banana's actions, Corona could determine $x$ in finitely many turns with absolute certainty.

*Pitchayut Saengrungkongka, Thailand*
