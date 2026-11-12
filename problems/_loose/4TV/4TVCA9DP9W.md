---
tag: 4TVCA9DP9W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2553329
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1994
    source: hf-ai-mo-aops
    label: 1994 French Mathematical Olympiad
---
Let us define a function $f:\mathbb N\to\mathbb N_0$ by $f(1)=0$ and, for all $n\in\mathbb N$ , $$ f(2n)=2f(n)+1, f(2n+1)=2f(n). $$ Given a positive integer $p$ , define a sequence $(u_n)$ by $u_0=p$ and $u_{k+1}=f(u_k)$ whenever $u_k\ne0$ .

(a) Prove that, for each $p\in\mathbb N$ , there is a unique integer $v(p)$ such that $u_{v(p)}=0$ .
(b) Compute $v(1994)$ . What is the smallest integer $p>0$ for which $v(p)=v(1994)$ .
(c) Given an integer $N$ , determine the smallest integer $p$ such that $v(p)=N$ .
