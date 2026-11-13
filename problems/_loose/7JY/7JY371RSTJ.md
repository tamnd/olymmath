---
tag: 7JY371RSTJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734493
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16853
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218492
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
Suppose that a sequence $a_0, a_1, \ldots$ of real numbers is defined by $a_0=1$ and $$a_n=\begin{cases}a_{n-1}a_0+a_{n-3}a_2+\cdots+a_0a_{n-1} & \text{if }n\text{ odd}a_{n-1}a_1+a_{n-3}a_3+\cdots+a_1a_{n-1} & \text{if }n\text{ even}\end{cases}$$ for $n\geq1$ . There is a positive real number $r$ such that $$a_0+a_1r+a_2r^2+a_3r^3+\cdots=\frac{5}{4}.$$ If $r$ can be written in the form $\frac{a\sqrt{b}-c}{d}$ for positive integers $a,b,c,d$ such that $b$ is not divisible by the square of any prime and $\gcd (a,c,d)=1,$ then compute $a+b+c+d$ .

*Proposed by Tristan Shin*
