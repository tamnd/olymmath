---
tag: ZE5C3SEJSX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be integers such that $0\leq k\leq n$. Prove that

$\sum_{u=0}^{k}\binom{n+u-1}{u}\binom{n}{k-2u}=\binom{n+k-1}{k}$.

Note that we use the following conventions:
$\binom{r}{0}=1$ for every integer $r$;
$\binom{u}{v}=0$ if $u$ is a nonnegative integer and $v$ is an integer satisfying $v<0$ or $v>u$.

Darij
