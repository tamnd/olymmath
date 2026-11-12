---
tag: SSGZ9R7QMW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3414092
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2023
    source: hf-ai-mo-aops
    label: 2023 Princeton University Math Competition
---
A polynomial $p(x) = \sum_{j=1}^{2n-1} a_j x^j$ with real coefficients is called *mountainous* if $n \ge 2$ and there exists a real number such that the polynomial's coefficients satisfy $a_1=1, a_{j+1}-a_j=k$ for $1 \le j \le n-1,$ and $a_{j+1}-a_j=-k$ for $n \le j \le 2n-2;$ we call $k$ the *step size* of $p(x).$ A real number $k$ is called *good* if there exists a mountainous polynomial $p(x)$ with step size $k$ such that $p(-3)=0.$ Let $S$ be the sum of all good numbers $k$ satisfying $k \ge 5$ or $k \le 3.$ If $S=\tfrac{b}{c}$ for relatively prime positive integers $b,c,$ find $b+c.$
