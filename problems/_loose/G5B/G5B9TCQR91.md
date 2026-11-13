---
tag: G5B9TCQR91
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378351
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19307
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220850
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
The bivariate functions $f_0, f_1, f_2, f_3, \dots$ are sequentially defined by the relations $f_0(x,y) = 0$ and $f_{n+1}(x,y) = \bigl|x+|y+f_n(x,y)|\bigr|$ for all integers $n \geq 0$ . For independently and randomly selected values $x_0, y_0 \in [-2, 2]$ , let $p_n$ be the probability that $f_n(x_0, y_0) < 1$ . Let $a,b,c,$ and $d$ be positive integers such that the limit of the sequence $p_1,p_3,p_5,p_7,\dots$ is $\frac{\pi^2+a}{b}$ and the limit of the sequence $p_0,p_2,p_4,p_6,p_8, \dots$ is $\frac{\pi^2+c}{d}$ . Compute $1000a+100b+10c+d$ .

*Proposed by Sean Li*
