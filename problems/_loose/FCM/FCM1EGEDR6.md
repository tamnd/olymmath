---
tag: FCM1EGEDR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C$ be a fixed circle, $u > 0$ be a fixed real and let $v_0 , v_1 , v_2 , \ldots$ be a sequence of positive real numbers. Two ants $A$ and $B$ walk around the perimeter of $C$ in opposite directions, starting from the same starting point. Ant $A$ has a constant speed $u$, while ant $B$ has an initial speed $v_0$. For each positive integer $n$, when the two ants collide for the $n$-th time, they change the directions in which they walk around the perimeter of $C$, with ant $A$ remaining at speed $u$ and ant $B$ stops walking at speed $v_{n-1}$ to walk at speed $v_n$.

(a) If the sequence $\{v_n\}$ is strictly increasing, with $\lim_{n\rightarrow \infty} v_n = +\infty$, prove that there is exactly one point in $C$ that ant $A$ will pass "infinitely" many times.

(b) Prove that there is a sequence $\{v_n\}$ with $\lim_{n\rightarrow\infty} v_n = +\infty$, such that ant $A$ will pass "infinitely" many times through all points on the circle $C$.
