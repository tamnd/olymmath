---
tag: 8CXDP79ZJJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h366315
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4760
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
Given positive integer $n$ , find the largest real number $\lambda=\lambda(n)$ , such that for any degree $n$ polynomial with complex coefficients $f(x)=a_n x^n+a_{n-1} x^{n-1}+\cdots+a_0$ ,
and any permutation $x_0,x_1,\cdots,x_n$ of $0,1,\cdots,n$ , the following inequality holds $\sum_{k=0}^n|f(x_k)-f(x_{k+1})|\geq \lambda |a_n|$ , where $x_{n+1}=x_0$ .
