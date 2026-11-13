---
tag: 73V7JCREBB
kind: problem
appearances:
  - at: pumac/2022/na6
    primary: true
  - at: pumac/2022/nb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444991
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $\ell,$ define the sequence $\{a^{(\ell)}\}_{n=1}^{\infty}$ such that $a_n^{(\ell)}=\lfloor n + \sqrt[\ell]{n}+\tfrac{1}{2}\rfloor$ for all positive integers $n.$ Let $S$ denote the set of positive integers that appear in all three of the sequences $\{a_n^{(2)} \}_{n=1}^{\infty},$ $\{a_n^{(3)} \}_{n=1}^{\infty},$ and $\{a_n^{(4)} \}_{n=1}^{\infty}.$ Find the sum of the elements of $S$ that lie in the interval $[1,100].$
