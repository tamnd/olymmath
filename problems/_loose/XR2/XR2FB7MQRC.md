---
tag: XR2FB7MQRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If two polynomials $P(x)$ and $Q(x)$ in the variable $x$ with leading coefficients of 1 make the polynomials $P(Q(x))$ and $Q(P(x))$ identical, then we say that $P$ and $Q$ are commutative.
(1) For each number $\alpha$, find all polynomials of degree not exceeding 3 that are commutative with the polynomial $P(x)=x^{2}-\alpha$.
(2) Let $P$ be a quadratic polynomial, and $k$ be a natural number. Prove that there is at most one $k$-degree polynomial that is commutative with $P$.
(3) Find all 4-degree and 8-degree polynomials that are commutative with the given quadratic polynomial $P$.
(4) If polynomials $R$ and $Q$ are commutative with the same quadratic polynomial $P$, prove that they are also commutative with each other.
(5) Prove that there exists an infinite sequence of polynomials $P_{2}, P_{3}, \cdots, P_{k}, \cdots$ where $P_{k}$ is a $k$-degree polynomial, such that any two polynomials in this sequence are commutative, and the polynomial $P_{2}$ has the form $P_{2}(x)=x^{2}-2$.
