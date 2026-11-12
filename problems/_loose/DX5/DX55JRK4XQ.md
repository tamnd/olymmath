---
tag: DX55JRK4XQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 ELMO  Shortlist
    url: https://artofproblemsolving.com/community/c6h3600624
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2025
    source: hf-ai-mo-aops
    label: 2025 ELMO  Shortlist
---
Let $p \equiv 11 \pmod{12}$ be prime, and let $S$ be the set of complex numbers $a+bi$ with integers $0 \le a, b < p$ . We also write $z_1 \equiv z_2 \pmod p$ if $p$ divides the real and imaginary parts of $z_1-z_2$ , and otherwise $z_1 \not\equiv z_2 \pmod p$ .

Let $T$ be the set of ordered triples $(x,y,z) \in S^3$ such that
$$
\sum_{\text{cyc}} x|y-z|^2 \equiv 0 \pmod p
\text{and} \prod_{\text{cyc}} (x^2-yz)(|x|^2-|y|^2) \not\equiv 0 \pmod p.
$$
Prove that $|T| \equiv (p-3) (p^2-1) \pmod{8p^2-8}$ .

*Karn Chutinan*
