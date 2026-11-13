---
tag: 42MRK0AW6J
kind: problem
type: answer
answer: \frac{16}{27}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two persons $A,\ B$. Given a coin of equally probability of showing up heads or tails. First $A$ owns the coin.
Repeat the operation as follows.

(i) When $A$ owns the coin, in tossing the coin, if the heads up, then 1 point is given to $A$, as the result the coin is owend by $A$.

If the tails up, 0 point are given to $A,\ B$, as the result, $A$ will give the coin to $B$.

(ii) When $B$ owns the coin, in tossing the coin, if the heads up, then 1 point is given to $B$, the coin is owend by $B$,

if the tails up, 0 point are given to $A,\ B$, as the result ,$B$ will give the coin to $A$.

and at the time when either $A$ or $B$ gets 2 points, the person who gets 2 points will be a winner.

For example, if the coin showed up like $H,\ T,\ H,\ H$, at the time, $A$ gets 1 point, $B$ gets 2 points, so $B$ is a winner.

(1) Find the probability $p(n)$ such that $A$ will be a winner after exactly $n$ tossing the coin by both of $A$ and $B$.

and the following question is added to applicants for Science.

(2) Find $\sum_{n=1}^\infty p(n)$.
