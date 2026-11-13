---
tag: 2HZQZGC0RX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let N = {1, 2, . . . , n} be a set of elements called voters. Let C = {S : S $\subseteq$ N} be the power set of N. Members of C are called coalitions. Let f be a function from C to {0, 1}. A coalition S $\subseteq$ N is said to be winning if f(S) = 1; it is said to be losing if f(S) = 0. Such a function is called a voting game if the following conditions hold:
(a) N is a wining coalition.
(b) The empty set $\Phi$ is a losing coalition.
(c) If S is a winning coalition and S $\subseteq$ S' is also winning.
(d) If both S and S' are winning then S $\cap$ S' $\neq$ $\Phi$, i.e S and S' have a
common voter.
Show that the maximum number of winning coalitions of a voting game
is $2^{n-1}$. Also find such a voting game.
