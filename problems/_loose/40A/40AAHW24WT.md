---
tag: 40AAHW24WT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b,c$ be given positive integers. Prove that there exists some positive integer $N$ such that
$$ a\mid Nbc+b+c,\ b\mid Nca+c+a,\ c\mid Nab+a+b $$
if and only if, denoting $d=\gcd(a,b,c)$ and $a=dx$, $b=dy$, $c=dz$, the positive integers $x,y,z$ are pairwise coprime, and also $\gcd(d,xyz) \mid x+y+z$.

(Dan Schwarz)
