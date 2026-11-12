---
tag: 8VKQJZBK34
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3540889
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Peru Cono Sur TST
---
For each pair of positive integers $m$ and $n$ , we define $f_m(n)$ as follows: $$ f_m(n) = \gcd(n, d_1) + \gcd(n, d_2) + \cdots + \gcd(n, d_k), $$
where $1 = d_1 < d_2 < \cdots < d_k = m$ are all the positive divisors of $m$ . For example, $f_4(6) = \gcd(6,1) + \gcd(6,2) + \gcd(6,4) = 5$ . $a)\:$ Find all positive integers $n$ such that $f_{2017}(n) = f_n(2017)$ . $b)\:$ Find all positive integers $n$ such that $f_6(n) = f_n(6)$ .
