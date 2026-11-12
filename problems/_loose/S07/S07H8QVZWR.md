---
tag: S07H8QVZWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611773
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
For a prime $q$ , let $\Phi_q(x)=x^{q-1}+x^{q-2}+\cdots+x+1$ .
Find the sum of all primes $p$ such that $3 \le p \le 100$ and there exists an odd prime $q$ and a positive integer $N$ satisfying
$$\dbinom{N}{\Phi_q(p)}\equiv \dbinom{2\Phi_q(p)}{N} \not \equiv 0 \pmod p. $$*Proposed by Sammy Luo*
