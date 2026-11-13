---
tag: BAPTWW0DME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{4,8,9,16, \ldots\}$ be the set of integers of the form $m^{k}$ for integers $m, k \geq 2$. For a positive integer $n$, let $f(n)$ denote the number of ways to write $n$ as the sum of (one or more) distinct elements of $S$. For example, $f(5)=0$ since there are no ways to express 5 in this fashion, and $f(17)=1$ since $17=8+9$ is the only way to express 17 .
(a) Prove that $f(30)=0$.
(b) Show that $f(n) \geq 1$ for $n \geq 31$.
(c) Let $T$ be the set of integers for which $f(n)=3$. Prove that $T$ is finite and non-empty, and find the largest element of $T$.

C4. (c) Let $T$ be the set of integers for which $f(n)=3$. Prove that $T$ is finite and non-empty, and find the largest element of $T$.
