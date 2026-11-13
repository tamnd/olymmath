---
tag: PBKXVBZD3G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734503
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16861
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $ABC$ be an acute triangle with $\cos B =\frac{1}{3}, \cos C =\frac{1}{4}$ , and circumradius $72$ . Let $ABC$ have circumcenter $O$ , symmedian point $K$ , and nine-point center $N$ . Consider all non-degenerate hyperbolas $\mathcal H$ with perpendicular asymptotes passing through $A,B,C$ . Of these $\mathcal H$ , exactly one has the property that there exists a point $P\in \mathcal H$ such that $NP$ is tangent to $\mathcal H$ and $P\in OK$ . Let $N'$ be the reflection of $N$ over $BC$ . If $AK$ meets $PN'$ at $Q$ , then the length of $PQ$ can be expressed in the form $a+b\sqrt{c}$ , where $a,b,c$ are positive integers such that $c$ is not divisible by the square of any prime. Compute $100a+b+c$ .

*Proposed by Vincent Huang*
