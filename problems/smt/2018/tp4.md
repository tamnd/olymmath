---
tag: 3YB07AW1MB
kind: problem
appearances:
  - at: smt/2018/tp4
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: stanford-smt
    name: Stanford Math Tournament 2018 official paper
    url: https://www.stanfordmathtournament.org/pdfs/smt2018/team-problems.pdf
    page: 3
    origin: H1
    zone: Z2
    kind: official
    extraction: vision/codex@0.167.0 (gpt-6-sol)
    confidence: 0.9
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2766622
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_k$ denote the series of Fibonacci numbers shifted back by one index, so that $F_0=1$, $F_1=1$, and $F_{k+1}=F_k+F_{k-1}$. It is known that for any fixed $n\geq 1$ there exist real constants $b_n,c_n$ such that the following recurrence holds for all $k\geq 1$:

$$
F_{n\cdot(k+1)}=b_n\cdot F_{n\cdot k}+c_n\cdot F_{n\cdot(k-1)}.
$$

Prove that $|c_n|=1$ for all $n\geq 1$.

<!-- S2 -->
Let $F_k$ denote the series of Fibonacci numbers shifted back by one index, so that $F_0 = 1$ , $F_1 = 1,$ and $F_{k+1} = F_k +F_{k-1}$ . It is known that for any fixed $n \ge 1$ there exist real constants $b_n$ , $c_n$ such that the following recurrence holds for all $k \ge 1$ : $$ F_{n\cdot (k+1)} = b_n \cdot F_{n \cdot k} + c_n \cdot F_{n\cdot (k-1)}. $$ Prove that $|c_n| = 1$ for all $n \ge 1$ .
