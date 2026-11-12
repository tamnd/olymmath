---
tag: JAZP4V3DAJ
kind: problem
type: answer
answer: "90"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any $0 \leq x, y \leq 1$ the inequality $\frac{x}{1+y}+\frac{y}{1+x} \leq 1$ holds.

Proof 1. Replace the ones in the denominators of the fractions on the left side of the inequality with $0 \leq x \leq 1$ and $0 \leq y \leq 1$ respectively. In this case, the denominators of the fractions will not increase and will remain positive, and the values of the fractions will not decrease: $\frac{x}{1+y}+\frac{y}{1+x} \leq \frac{x}{x+y}+\frac{y}{y+x}=\frac{x+y}{x+y}=1$ - which is what we needed to prove.

Proof 2. Eliminate the denominators and combine like terms, we get $x^{2}+y^{2} \leq 1+x y$. If $x \leq y$, then the required inequality is obtained by adding the inequalities $y^{2} \leq 1$ and $x^{2} \leq x y$. If $y \leq x$, then the required inequality is obtained by adding the inequalities $x^{2} \leq 1$ and $y^{2} \leq x y$.

10.4. Point $M$ is the midpoint of side $A B$ of triangle $A B C$. Points $P$ and $Q$ are chosen on segment $C M$ such that $P$ is closer to $M$, $Q$ is closer to $C$, and $C Q=2 P M$. It turns out that $B Q=A C$. Find the measure of angle $A P M$.
