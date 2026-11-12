---
tag: F1HEJTG8VH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1225754
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Let $\varepsilon$ denote the empty string. Given a pair of strings $(A,B)\in\{0,1,2\}^*\times\{0,1\}^*$ , we are allowed the following operations:

$$\begin{cases}
(A,1)\to(A0,\varepsilon)
(A,10)\to(A00,\varepsilon)
(A,0B)\to(A0,B)
(A,11B)\to(A01,B)
(A,100B)\to(A0012,1B)
(A,101B)\to(A00122,10B)
\end{cases}$$

We perform these operations on $(A,B)$ until we can no longer perform any of them. We then iteratively delete any instance of $20$ in $A$ and replace any instance of $21$ with $1$ until there are no such substrings remaining. Among all binary strings $X$ of size $9$ , how many different possible outcomes are there for this process performed on $(\varepsilon,X)$ ?
