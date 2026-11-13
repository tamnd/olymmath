---
tag: 9QS4MHVBBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms
    source: hf-mathnet
    label: Greece Hellenic Mathematical Olympiad
---
Let $n \ge 2$ be an integer. We consider two finite subsets $A, B$ of the set of integers, such that the subset $A$ contains at most $n$ elements and let $\Gamma$ be a subset of the set $\{(\alpha, \beta): \alpha \in A, \beta \in B\}$. Achilles writes on a blackboard all possible differences $\alpha - \beta$, with $(\alpha, \beta) \in \Gamma$. Let $d$ be the number of all these differences. Next, Achilles writes in a second blackboard all triads $(\kappa, \lambda, \mu)$ with $(\kappa, \lambda) \in \Gamma, (\kappa, \mu) \in \Gamma$. Let $p$ be the number of all these triads. Prove that:
$$
n \cdot p \ge d^2.
$$
