---
tag: JZ3K9ZQBHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378335
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19300
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220843
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
Let $ABC$ be a triangle with $AB=11,BC=12,$ and $CA=13$ , let $M$ and $N$ be the midpoints of sides $CA$ and $AB$ , respectively, and let the incircle touch sides $CA$ and $AB$ at points $X$ and $Y$ , respectively. Suppose that $R,S,$ and $T$ are the midpoints of line segments $MN,BX,$ and $CY$ , respectively. Then $\sin\angle{SRT}=\frac{k\sqrt{m}}{n}$ , where $k,m,$ and $n$ are positive integers such that $\gcd(k,n)=1$ and $m$ is not divisible by the square of any prime. Compute $100k+10m+n$ .

*Proposed by Tristan Shin*
