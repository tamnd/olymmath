---
tag: 9QJ9P7NKZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260506
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{n,k}$ denote the set of lattice paths in the coordinate plane of upsteps $u=[1,1]$, downsteps $d=[1,-1]$, and flatsteps $f=[1,0]$ that contain $n$ steps, $k$ of which are slanted ($u$ or $d$). A sharp turn is a consecutive pair of $ud$ or $du$. Let $B_{n,k}$ denote the set of paths in $A_{n,k}$ with no upsteps among the first $k-1$ steps, and let $C_{n,k}$ denote the set of paths in $A_{n,k}$ with no sharps anywhere. For example, $fdu$ is in $B_{3,2}$ but not in $C_{3,2}$, while $ufd$ is in $C_{3,2}$ but not $B_{3,2}$. For $1 \le k \le n$, prove that the sets $B_{n,k}$ and $C_{n,k}$ contains the same number of elements.
