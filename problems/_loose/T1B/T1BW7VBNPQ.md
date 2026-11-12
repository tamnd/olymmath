---
tag: T1BW7VBNPQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3331072
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2024
    source: hf-ai-mo-aops
    label: 2024 India IMOTC
---
Prove that there exists a function $f : \mathbb{N} \mapsto \mathbb{N}$ that satisfies the following:

___1. For all positive integers $m, n$ we have $$\gcd(|f(m)-f(n)|, f(mn)) = f(\gcd(m, n))$$
___2. For all positive integers $m$ , we have $f(f(m)) = f(m)$ .
___3. For all positive integers $k$ , there exists a positive integer $n$ with $2024^{k} \mid f(n)$ .

*Proposed by MV Adhitya, Archit Manas*
