---
tag: C2EWR19HNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h2965901
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2022
    source: hf-ai-mo-aops
    label: 2022 Miklós Schweitzer
---
Original in Hungarian; translated with Google translate; polished by myself.

Let $f: [0, \infty) \to [0, \infty)$ be a function that is linear between adjacent integers, and for $n = 0, 1, \dots$ satisfies $$ f(n) = \begin{cases} 0, & \textrm{if }2\mid n,4^l + 1, & \textrm{if }2 \nmid n, 4^{l - 1} \leq n < 4^l(l = 1, 2, \dots).\end{cases} $$ Let $f^1(x) = f(x)$ , and $f^k(x) = f(f^{k - 1}(x))$ for all integers $k \geq 2$ . Determine the values of $\liminf\nolimits_{k\to\infty}f^k(x)$ and $\limsup\nolimits_{k\to\infty}f^k(x)$ for almost all $x \in [0, \infty)$ under Lebesgue measure.

(Not sure whether the last sentence translates correctly; the original:
Határozzuk meg Lebesgue majdnem minden $x\in [0, \infty)$ -re a $\liminf\nolimits_{k\to\infty}f^k(x)$ és $\limsup\nolimits_{k\to\infty}f^k(x)$ értékét.)
