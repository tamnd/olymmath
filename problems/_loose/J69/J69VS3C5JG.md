---
tag: J69VS3C5JG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1171888
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
Determine the number of odd integers $1 \le n \le 100$ with the property that
$$
\sum_{\substack{1 \le k \le n \gcd(k,n) = 1}} \cos\left(\frac{2\pi k}{n} \right) = 1
\text{and} \sum_{\substack{1 \le k \le n \gcd(k,n) = 1}} \sin\left(\frac{2\pi k}{n} \right) = 0.
$$

*Based on a proposal by Mayank Pandey*
