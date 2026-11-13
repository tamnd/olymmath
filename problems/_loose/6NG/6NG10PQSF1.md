---
tag: 6NG10PQSF1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h412956
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6574
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2011
    source: hf-ai-mo-aops
    label: 2011 India IMO Training Camp
---
Let $T$ be a non-empty finite subset of positive integers $\ge 1$ . A subset $S$ of $T$ is called **good** if for every integer $t\in T$ there exists an $s$ in $S$ such that $gcd(t,s) >1$ . Let

$$A={(X,Y)\mid X\subseteq T,Y\subseteq T,gcd(x,y)=1 \text{for all} x\in X, y\in Y}$$

Prove that : $a)$ If $X_0$ is not **good** then the number of pairs $(X_0,Y)$ in $A$ is **even**. $b)$ the number of good subsets of $T$ is **odd**.
