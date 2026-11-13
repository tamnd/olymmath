---
tag: PGDYM7Q234
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1, S=\{1,2, \cdots, 3 n\}$, prove that in any $(n+2)$-element subset of $S$, there must be two numbers whose difference is greater than $n$ and less than $2 n$.
 Let $T$ be any $(n+2)$-element subset of $S$. Since the conclusion only depends on the difference between two numbers, we can assume that the maximum element of $T$ is $3 n$. If not, we can add a number to the $n+2$ numbers in $T$ to make the maximum element $3 n$.

Since the maximum element is $3 n$, if any of the other $n+1$ numbers is in $\{n+1, n+2, \cdots, 2 n-1\}$, the problem is solved. Otherwise, the other $n+1$ numbers all belong to the following $n$ pairs of numbers:
$$
(1,2 n),(2,2 n+1),(3,2 n+2), \cdots,(n, 3 n-1) \text {. }
$$

By the pigeonhole principle, there must be a pair of numbers both belonging to $T$, and these two numbers satisfy the requirement of the problem.
[Proof 2] Take a circle and divide it into $3 n$ equal parts, then use $3 n$ points to represent the numbers $1,2, \cdots, 3 n$ in counterclockwise order. Color any $n+2$ of these points black, and the rest white. Thus, the problem is reduced to proving that there must be two black points such that the two arcs they form on the circle are both greater than one-third of the circumference.

If not, then for any two black points, one of the two arcs they form on the circle must be no more than one-third of the circumference.
For convenience, we call two non-overlapping arcs that sum to the entire circumference complementary, and we consider

the
