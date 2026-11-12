---
tag: XZ2XM6C43M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3344257
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2024
    source: hf-ai-mo-aops
    label: 2024 ELMO Shortlist
---
Let $d(n)$ be the number of divisors of a nonnegative integer $n$ (we set $d(0)=0$ ). Find all positive integers $d$ such that there exists a two-variable polynomial $P(x,y)$ of degree $d$ with integer coefficients such that:

- for any positive integer $y$ , there are infinitely many positive integers $x$ such that $\gcd(x,y)=1$ and $d(|P(x,y)|) \mid x$ , and
- for any positive integer $x$ , there are infinitely many positive integers $y$ such that $\gcd(x,y)=1$ and $d(|P(x,y)|) \mid y$ .

*Allen Wang*
