---
tag: CRHEW26PMS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378375
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19310
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220853
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
Let $ABC$ be a scalene triangle. Let $I_0=A$ and, for every positive integer $t$ , let $I_t$ be the incenter of triangle $I_{t-1}BC$ . Suppose that the points $I_0,I_1,I_2,\ldots$ all lie on some hyperbola $\mathcal{H}$ whose asymptotes are lines $\ell_1$ and $\ell_2$ . Let the line through $A$ perpendicular to line $BC$ intersect $\ell_1$ and $\ell_2$ at points $P$ and $Q$ respectively. Suppose that $AC^2=\frac{12}{7}AB^2+1$ . Then the smallest possible value of the area of quadrilateral $BPCQ$ is $\frac{j\sqrt{k}+l\sqrt{m}}{n}$ for positive integers $j$ , $k$ , $l$ , $m$ , and $n$ such that $\gcd(j,l,n)=1$ , both $k$ and $m$ are squarefree, and $j>l$ . Compute $10000j+1000k+100l+10m+n$ .

*Proposed by Gopal Goel, Luke Robitaille, Ashwin Sah, & Eric Shen*
