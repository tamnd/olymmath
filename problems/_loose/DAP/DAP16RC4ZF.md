---
tag: DAP16RC4ZF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378330
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19296
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Let $ABC$ be a scalene, non-right triangle. Let $\omega$ be the incircle and let $\gamma$ be the nine-point circle (the circle through the feet of the altitudes) of $\triangle ABC$ , with centers $I$ and $N$ , respectively. Suppose $\omega$ and $\gamma$ are tangent at a point $F$ . Let $D$ be the foot of the perpendicular from $A$ to line $BC$ and let $M$ be the midpoint of side $\overline{BC}$ . The common tangent to $\omega$ and $\gamma$ at $F$ intersects lines $AB$ and $AC$ at points $P$ and $Q$ , respectively. Let lines $DP$ and $DQ$ intersect $\gamma$ at points $P_1 \neq D$ and $Q_1 \neq D$ , respectively. Suppose that point $Z$ lies on line $P_1Q_1$ such that $\angle MFZ=90^{\circ}$ and $MZ \perp DF$ . Suppose that $\gamma$ has radius 11 and $\omega$ has radius 5. Then $DI=\frac{k\sqrt{m}}{n}$ , where $k,m,$ and $n$ are positive integers such that $\gcd(k,n)=1$ and $m$ is not divisible by the square of any prime. Compute $100k+10m+n$ .

*Proposed by Luke Robitaille*
