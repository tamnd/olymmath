---
tag: 90V4KF8XXN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13768
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
Denote by $F_0(x)$ , $F_1(x)$ , $\ldots$ the sequence of Fibonacci polynomials, which satisfy the recurrence $F_0(x)=1$ , $F_1(x)=x$ , and $F_n(x)=xF_{n-1}(x)+F_{n-2}(x)$ for all $n\geq 2$ . It is given that there exist unique integers $\lambda_0$ , $\lambda_1$ , $\ldots$ , $\lambda_{1000}$ such that $$x^{1000}=\sum_{i=0}^{1000}\lambda_iF_i(x)$$ for all real $x$ . For which integer $k$ is $|\lambda_k|$ maximized?
