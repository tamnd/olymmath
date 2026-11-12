---
tag: WDFSW1GVST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h463913
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2001
    source: hf-ai-mo-aops
    label: 2001 China National Olympiad
---
Let $a=2001$ . Consider the set $A$ of all pairs of integers $(m,n)$ with $n\neq0$ such that
(i) $m<2a$ ;
(ii) $2n|(2am-m^2+n^2)$ ;
(iii) $n^2-m^2+2mn\leq2a(n-m)$ .
For $(m, n)\in A$ , let $$f(m,n)=\frac{2am-m^2-mn}{n}.$$
Determine the maximum and minimum values of $f$ .
