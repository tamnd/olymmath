---
tag: GMPKWP2J30
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h355625
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2010
    source: hf-ai-mo-aops
    label: 2010 Singapore Senior Math Olympiad
---
Let $p$ be a prime number and let $a_1,a_2,\dots,a_k$ be distinct integers chosen from $1,2,\dots,p-1$ . For $1\le i \le k$ , let $f_i^{(n)}$ denote the remainder of the integer $na_1$ upon division by $p$ , so $0\le f_i^{(n)}<p$ . Define $S=\{n:1\le n \le p-1,f_1^{(n)}<\dots<f_k^{(n)}\}$ Show that $S$ has less than $\frac{2p}{k+1}$ elements.
