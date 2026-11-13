---
tag: T1RCY5F7WD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h57667
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25237
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
$a > 0$ and $b$ , $c$ are integers such that $ac$ - $b^2$ is a square-free positive integer P. Let $f(n)$ be the number of pairs of integers $d, e$ such that $ad^2 + 2bde + ce^2= n$ . Show that $f(n)$ is finite and that $f(n) = f(P^{k}n)$ for every positive integer $k$ .**Original Statement:**

Let $a,b,c$ be given integers $a > 0,$ $ac-b^2 = P = P_1 \cdots P_n$ where $P_1 \cdots P_n$ are (distinct) prime numbers. Let $M(n)$ denote the number of pairs of integers $(x,y)$ for which $$ ax^2 + 2bxy + cy^2 = n. $$ Prove that $M(n)$ is finite and $M(n) = M(P_k \cdot n)$ for every integer $k \geq 0.$ Note that the " $n$ " in $P_N$ and the " $n$ " in $M(n)$ do not have to be the same.
