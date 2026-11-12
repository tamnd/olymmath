---
tag: XS75HRFDS0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747848
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2020
    source: hf-ai-mo-aops
    label: 2020 Princeton University Math Competition
---
Let $\{x\} = x- \lfloor x \rfloor$ . Consider a function f from the set $\{1, 2, . . . , 2020\}$ to the half-open interval $[0, 1)$ . Suppose that for all $x, y,$ there exists a $z$ so that $\{f(x) + f(y)\} = f(z)$ . We say that a pair of integers $m, n$ is valid if $1 \le m, n \le 2020$ and there exists a function $f$ satisfying the above so $f(1) = \frac{m}{n}$ . Determine the sum over all valid pairs $m, n$ of ${m}{n}$ .
