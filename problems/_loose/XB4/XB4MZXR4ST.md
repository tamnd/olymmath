---
tag: XB4MZXR4ST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3274354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2017
    source: hf-ai-mo-aops
    label: 2017 BMT Spring
---
Let $a_d$ be the number of non-negative integer solutions $(a, b)$ to $a + b = d$ where $a \equiv b$ (mod $n$ ) for a fixed $n \in Z^+$ . Consider the generating function $M(t) = a_0 + a_1t + a_2t^2 + ...$ Consider $$ P(n) = \lim_{t\to 1} \left( nM(t) - \frac{1}{(1 - t)^2} \right). $$ Then $P(n)$ , $n \in Z^+$ is a polynomial in $n$ , so we can extend its domain to include all real numbers while having it remain a polynomial. Find $P(0)$ .
