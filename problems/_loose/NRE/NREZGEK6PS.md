---
tag: NREZGEK6PS
kind: problem
type: answer
answer: p_{n}=\frac{1}{5}(1-\frac{1}{6^{n}})(n\in{N}^{*})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To relieve students' stress, a class in the senior year of a certain school held a basketball shooting game, during which two students, A and B, took turns in a fixed-point shooting competition (each person shoots once per round). Under the same conditions, in each round, A and B stand at the same position, A shoots first, and each person shoots once. If one of them hits, the one who hits gets 1 point, and the one who misses gets -1 point; if both hit or both miss, both get 0 points. Suppose the probability of A hitting each shot is $\frac{2}{3}$, and the probability of B hitting each shot is $\frac{1}{2}$, and each shot is independent.
(1) After 1 round of shooting, let A's score be $X$. Find the distribution of $X$ and its expectation;
(2) If after $n$ rounds of shooting, use $p_{i}$ to denote the probability that A's cumulative score is lower than B's cumulative score after the $i$-th round of shooting.
(i) Find $p_{1}, p_{2}, p_{3}$;
(ii) Given $p_{0}=0$, and from computer simulation, we have $p_{i}=a p_{i+1}+b p_{i-1}\left(i \geqslant 1, i \in \mathbf{N}^{*}\right)$, please find the values of $a, b$ based on the values of $p_{1}, p_{2}, p_{3}$ from (i), and then find the general term formula of the sequence $\left\{p_{n}\right\}$.
