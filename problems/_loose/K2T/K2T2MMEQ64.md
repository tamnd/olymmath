---
tag: K2T2MMEQ64
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k>1$ be a positive integer. On a $\text{k} \times \text{k}$ square grid, Tom and Jerry are on opposite corners, with Tom at the top right corner. Both can move to an adjacent square every move, where two squares are adjacent if they share a side. Tom and Jerry alternate moves, with Jerry going first. Tom *catches* Jerry if they are on the same square. We aim to answer to the following question: What is the smallest number of moves that Tom needs to guarantee catching Jerry?

(a) Without proof, find the answer in the cases of $k=2,3,4$, and (correctly) guess what the answer is in terms of $k$. We'll refer to this answer as $A(k)$.

(b) Find a strategy that Jerry can use to guarantee that Tom takes at least $A(k)$ moves to catch Jerry.

Now, you will find a strategy for Tom to catch Jerry in at most $A(k)$ moves, no matter what Jerry does.

(c) Find, with proof, a working strategy for $k=5$.

(d) Find, with proof, a working strategy for all $k \geq 2$.
