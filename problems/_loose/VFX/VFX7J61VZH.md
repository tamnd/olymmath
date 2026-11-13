---
tag: VFX7J61VZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for each integer $a$, there is a unique decomposition
$$ a = \sum_{j=0}^{n} d_j 2^j , d_j \in (-1,0,1) $$ such that no two consecutive $d_j$'s are nonzero. Show further that if $f$ is nondecreasing function from the set of all non-negative integers in to the set of all non-negative real numbers, and if $a = \sum_{j=0}^{n} c_j 2^j$ is any other decomposition of $a$ with $c_j \in (-1,0,1)$ , then

$$ \sum_{j=0}^{n} |d_j| f(j) \leq \sum_{j=0}^{n} |c_j| f(j) $$
