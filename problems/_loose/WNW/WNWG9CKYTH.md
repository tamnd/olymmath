---
tag: WNWG9CKYTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Girls Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3628340
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-gmo/2025
    source: hf-ai-mo-aops
    label: 2025 China Girls Math Olympiad
---
For a real number $\lambda$ consider the statement $P(\lambda)$ :

There exists a positive integer $n$ and $3n$ pairwise distinct reals $a_1, a_2, \cdots a_n ; b_1, b_2, \cdots, b_n ; c_1, c_2, \cdots c_n$ such that:
$$ | \{ (i, j ) : 1 \le i,j \le n, a_i>b_j \}| \ge \lambda n^2 $$
$$ | \{ (i, j ) : 1 \le i,j \le n, b_i>c_j \}| \ge \lambda n^2 $$
$$ | \{ (i, j ) : 1 \le i,j \le n, c_i>a_j \}| \ge \lambda n^2 $$

Prove that if $\lambda < \frac{\sqrt{5}-1}{2}$ then $P(\lambda)$ is true and otherwise it is false.
