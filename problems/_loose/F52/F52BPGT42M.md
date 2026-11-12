---
tag: F52BPGT42M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 BMT Fall
    url: https://artofproblemsolving.com/community/c6h2746857
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2020
    source: hf-ai-mo-aops
    label: 2020 BMT Fall
---
The Fibonacci numbers $F_n$ are defined as $F_1 = F_2 = 1$ and $F_n = F_{n-1} + F_{n-2}$ for all $n> 2$ . Let $A$ be the minimum area of a (possibly degenerate) convex polygon with $2020$ sides, whose side lengths are the first $2020$ Fibonacci numbers $F_1$ , $F_2$ , $...$ , $F_{2020}$ (in any order). A degenerate convex polygon is a polygon where all angles are $\le 180^o$ . If $A$ can be expressed in the form $$ \frac{\sqrt{(F_a-b)^2-c}}{d} $$ , where $a, b, c$ and $d$ are positive integers, compute the minimal possible value of $a + b + c + d$ .
