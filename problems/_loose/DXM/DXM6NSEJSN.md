---
tag: DXM6NSEJSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3071878
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Romania Team Selection Test
---
Consider a prime number $p\geqslant 11$ . We call a triple $a,b,c$ of natural numbers *suitable* if they give non-zero, pairwise distinct residues modulo $p{}$ . Further, for any natural numbers $a,b,c,k$ we define $$f_k(a,b,c)=a(b-c)^{p-k}+b(c-a)^{p-k}+c(a-b)^{p-k}.$$Prove that there exist suitable $a,b,c$ for which $p\mid f_2(a,b,c)$ . Furthermore, for each such triple, prove that there exists $k\geqslant 3$ for which $p\nmid f_k(a,b,c)$ and determine the minimal $k{}$ with this property.

*Călin Popescu and Marian Andronache*
