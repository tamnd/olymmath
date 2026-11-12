---
tag: Q97R9KE7YX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3293411
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2023
    source: hf-ai-mo-aops
    label: 2023 South East Mathematical Olympiad
---
Let $R[x]$ be the whole set of real coefficient polynomials, and define the mapping $T: R[x] \to R[x]$ as follows: For $$ f (x) = a_nx^{n} + a_{n-1}x^{n- 1} +...+ a_1x + a_0, $$ let $$ T(f(x))=a_{n}x^{n+1} + a_{n-1}x^{n} + (a_n+a_{n-2})x^{n-1 } + (a_{n-1}+a_{n-3})x^{n-2}+...+(a_2+a_0)x+a_1. $$ Assume $P_0(x)= 1$ , $P_n(x) = T(P_{n-1}(x))$ ( $n=1,2,...$ ), find the constant term of $P_n(x)$ .
