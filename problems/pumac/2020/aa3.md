---
tag: XS75HRFDS0
kind: problem
appearances:
  - at: pumac/2020/aa3
    primary: true
  - at: pumac/2020/ab5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020AlgebraAQuestions.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
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
---
Let $\{x\} = x- \lfloor x \rfloor$ . Consider a function f from the set $\{1, 2, . . . , 2020\}$ to the half-open interval $[0, 1)$ . Suppose that for all $x, y,$ there exists a $z$ so that $\{f(x) + f(y)\} = f(z)$ . We say that a pair of integers $m, n$ is valid if $1 \le m, n \le 2020$ and there exists a function $f$ satisfying the above so $f(1) = \frac{m}{n}$ . Determine the sum over all valid pairs $m, n$ of ${m}{n}$ .
