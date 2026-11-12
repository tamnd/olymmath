---
tag: HS8FB4X5M2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2753703
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2019
    source: hf-ai-mo-aops
    label: 2019 BMT Spring
---
Define $f(x, y)$ to be $\frac{|x|}{|y|}$ if that value is a positive integer, $\frac{|y|}{|x|}$ if that value is a positive integer, and zero otherwise. We say that a sequence of integers $\ell_1$ through $\ell_n$ is *good* if $f(\ell_i, \ell_{i+1})$ is nonzero for all $i$ where $1 \le i \le n - 1$ , and the score of the sequence is $\sum^{n-1}_{i=1} f(\ell_i, \ell_{i+1})$
